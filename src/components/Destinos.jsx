/**
 * Lista de pacotes/destinos em cards.
 *
 * - `destinations` é um array de objetos (dados estáticos). Em um app real,
 *   isso poderia vir de uma API depois.
 * - useState guarda qual card está "aberto" (mostra a descrição longa).
 *   activeDestinationId = null significa nenhum aberto; ou um número (id).
 * - .map() percorre o array e devolve um componente por item; `key` ajuda o React
 *   a identificar cada item na lista (obrigatório quando há lista).
 *
 * O arquivo chama-se Destinos.jsx por histórico; o componente exportado é Destinations.
 */
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const destinations = [
  {
    id: 1,
    name: "Praia",
    description: "Pra fazer aquela marquinha ou virar camarão",
    price: "R$ 1.000,00",
  },
  {
    id: 2,
    name: "Serrinha",
    description: "Pra ficar vendo morro com neblina",
    price: "R$ 800,00",
  },
  {
    id: 3,
    name: "Internacional",
    description:
      "Comprinhas no Paraguai, ver peruano tocando flauta, acariciar Lhamas, ...",
    price: "R$ 5.000,00",
  },
];

export default function Destinations() {
  const [activeDestinationId, setActiveDestinationId] = useState(null);

  function toggleDestinationDetails(id) {
    setActiveDestinationId(
      activeDestinationId === id ? null : id
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Nossos Destinos</Text>

      <View style={styles.cards}>
        {destinations.map((destination) => (
          <View key={destination.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {destination.name}
            </Text>
            <Text style={styles.price}>{destination.price}</Text>

            <Pressable
              onPress={() => toggleDestinationDetails(destination.id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Ver mais detalhes</Text>
            </Pressable>

            {activeDestinationId === destination.id ? (
              <Text style={styles.description}>
                {destination.description}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 18,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 18,
  },
  cards: {
    flexDirection: "column",
  },
  card: {
    padding: 22,
    borderWidth: 5,
    borderColor: "#0b907c",
    borderRadius: 70,
    marginBottom: 18,
    backgroundColor: "rgba(255,255,255,0.02)",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 6,
    textAlign: "center",
  },
  price: {
    color: "#0b907c",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },
  button: {
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: "#5d5d5d",
    borderWidth: 4,
    borderColor: "#0b907c",
  },
  buttonText: {
    color: "#f4f7f4",
    fontSize: 15,
    fontWeight: "800",
  },
  description: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 14,
    color: "#0f172a",
    fontWeight: "600",
  },
});
