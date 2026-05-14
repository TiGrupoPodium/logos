import SwiftUI

@main
struct IronGymApp: App {
    var body: some Scene {
        WindowGroup {
            AuthView()
                .preferredColorScheme(.dark)
        }
    }
}
