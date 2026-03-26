/**
 * Botão flutuante que abre o WhatsApp com número e mensagem pré-preenchida.
 *
 * - Linking.openURL pede ao sistema (iOS/Android) para abrir o URL; no caso, wa.me
 *   abre o app do WhatsApp se estiver instalado.
 * - encodeURIComponent garante que a mensagem com caracteres especiais vá certa na URL.
 * - position: 'absolute' + right/bottom fixa o botão no canto da tela (em relação ao pai
 *   que tem flex: 1 em Home).
 * - pointerEvents="box-none" no container: toques passam através do View vazio,
 *   exceto no botão (útil quando há elementos sobrepostos).
 */
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function WhatsAppButton() {
  const phoneNumber = "5541988710516";
  const message = "Olá, quero saber mais sobre seu pacote!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <View pointerEvents="box-none" style={styles.container}>
      <Pressable
        onPress={() => Linking.openURL(whatsappUrl)}
        accessibilityRole="button"
        accessibilityLabel="Abrir WhatsApp"
        style={styles.button}
      >
        <Text style={styles.icon}>💬</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#0a6221",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  icon: {
    color: "white",
    fontSize: 26,
  },
});
