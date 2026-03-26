/**
 * Cabeçalho: logo, nome e links de navegação (Início, Destinos, Contato).
 *
 * No celular não existe <a href="..."> como na web; usamos Pressable (área clicável)
 * e Text para o texto. As ações vêm do pai (Home) via props — assim o Header não
 * precisa saber como rolar a página, só chama a função que recebeu.
 */
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import heroLogo from "../assets/hero.png";

export default function Header({
  onPressHome,
  onPressDestinations,
  onPressContact,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        <Image source={heroLogo} style={styles.logo} />
        <Text style={styles.title}>E&Y Turismo</Text>
      </View>

      <View style={styles.nav}>
        <Pressable onPress={onPressHome}>
          <Text style={styles.link}>Início</Text>
        </Pressable>
        <Pressable onPress={onPressDestinations}>
          <Text style={styles.link}>Destinos</Text>
        </Pressable>
        <Pressable onPress={onPressContact}>
          <Text style={styles.link}>Contato</Text>
        </Pressable>
      </View>
    </View>
  );
}

// StyleSheet.create agrupa estilos e ajuda o React Native a otimizar. É parecido com CSS,
// mas com nomes em camelCase (backgroundColor, não background-color).
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#0b907c",
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 56,
    height: 56,
    resizeMode: "contain",
    marginRight: 8,
  },
  title: {
    color: "#e9ebe9",
    fontSize: 20,
    fontWeight: "700",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "rgb(246, 244, 244)",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
