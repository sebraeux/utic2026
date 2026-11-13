import AVFoundation
import Foundation
import ImageIO
import UniformTypeIdentifiers

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let videoURL = root.appending(path: "videos/months-scroll.mp4")
let outputDirectory = root.appending(path: "img/journey-frames")
try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

let asset = AVURLAsset(url: videoURL)
let duration = try await asset.load(.duration).seconds
let frameCount = 60
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.maximumSize = CGSize(width: 800, height: 800)
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero

for index in 0..<frameCount {
    let progress = Double(index) / Double(frameCount - 1)
    let seconds = max(0, duration - 0.08) * progress
    let time = CMTime(seconds: seconds, preferredTimescale: 600)
    let image = try generator.copyCGImage(at: time, actualTime: nil)
    let filename = String(format: "frame-%03d.jpg", index)
    let destinationURL = outputDirectory.appending(path: filename)

    guard let destination = CGImageDestinationCreateWithURL(
        destinationURL as CFURL,
        UTType.jpeg.identifier as CFString,
        1,
        nil
    ) else {
        throw NSError(domain: "JourneyFrames", code: 1, userInfo: [NSLocalizedDescriptionKey: "Could not create image destination for \(filename)"])
    }

    CGImageDestinationAddImage(
        destination,
        image,
        [kCGImageDestinationLossyCompressionQuality: 0.68] as CFDictionary
    )
    guard CGImageDestinationFinalize(destination) else {
        throw NSError(domain: "JourneyFrames", code: 2, userInfo: [NSLocalizedDescriptionKey: "Could not write \(filename)"])
    }
}

print("Generated \(frameCount) JPEG frames from \(duration.formatted(.number.precision(.fractionLength(1)))) seconds of video.")
