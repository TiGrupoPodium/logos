import SwiftUI

struct AuthView: View {
    @State private var email = ""
    @State private var password = ""

    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                Text("Iron Gym").font(.largeTitle).bold().foregroundColor(.red)
                TextField("Email", text: $email).textFieldStyle(.roundedBorder)
                SecureField("Senha", text: $password).textFieldStyle(.roundedBorder)
                Button("Entrar") {}
                    .buttonStyle(.borderedProminent)
                Button("Entrar com Apple") {}
                Button("Entrar com Google") {}
            }.padding()
        }
    }
}
