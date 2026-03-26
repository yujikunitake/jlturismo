/**
 * Faixa "hero" com imagem de fundo, texto de boas-vindas e botão principal.
 *
 * No React Native não existe `background-image` no CSS da web; usamos ImageBackground
 * para colocar uma imagem atrás do conteúdo. Um View escuro (overlay) deixa o texto legível.
 * onPressPackage vem do pai: quando o usuário toca "Ver meu pacote", rola até os destinos.
 */
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import heroBg from "../assets/hero.png";

export default function Hero({ onPressPackage }) {
  return (
    <ImageBackground source={heroBg} style={styles.hero} resizeMode="cover">
      {/* Camada semi-transparente por cima da foto */}
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à E&Y Turismo</Text>
        <Text style={styles.subtitle}>
          Viaje com a garantia de voltar com vida... talvez
        </Text>

        <Pressable onPress={onPressPackage} style={styles.button}>
          <Text style={styles.buttonText}>Ver meu pacote</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 380,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  content: {
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 12,
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: "#5d5d5d",
    borderWidth: 5,
    borderColor: "#0b907c",
  },
  buttonText: {
    color: "#f4f7f4",
    fontSize: 16,
    fontWeight: "700",
  },
});
