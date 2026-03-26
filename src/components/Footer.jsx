/**
 * Rodapé: texto fixo no final da página. Só View + Text; sem interação.
 */
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>@ 2026 E&Y Turismo - Patente Pendente</Text>
      <Text style={styles.text}>
        Fazer isso foi LEGEN ...wait one moment... DARY!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#0a3d62",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    color: "#f4f7f4",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
});
