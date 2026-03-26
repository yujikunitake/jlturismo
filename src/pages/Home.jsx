/**
 * Página inicial: junta cabeçalho, destaque, lista de destinos, rodapé e o botão WhatsApp.
 *
 * Conceitos úteis:
 * - Componente: função que descreve um pedaço da tela (Header, Hero, etc.).
 * - Props: dados que o pai passa pro filho (ex.: funções de clique).
 * - Estado (useState): valores que mudam com o tempo; quando mudam, a tela atualiza.
 * - Ref (useRef): referência a um elemento do React Native (aqui, o ScrollView) para
 *   chamar métodos como scrollTo.
 * - useMemo: guarda um objeto calculado e só recalcula quando as dependências mudam
 *   (aqui, quando a posição Y do destino/rodapé muda).
 */
import { useMemo, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Destinations from "../components/Destinos";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  // Referência ao ScrollView para poder rolar a página em código (scroll programático).
  const scrollRef = useRef(null);

  // Posição vertical (em pixels) do bloco "Destinos" e do rodapé dentro do scroll.
  // onLayout mede onde cada bloco está; usamos isso para os links do menu irem até a seção certa.
  const [destinationsY, setDestinationsY] = useState(0);
  const [footerY, setFooterY] = useState(0);

  const scrollToY = (y) => {
    if (typeof y !== "number") return;
    scrollRef.current?.scrollTo({ y, animated: true });
  };

  // Funções que o Header e o Hero recebem: ao clicar, rodamos até o Y certo.
  // useMemo evita re-criar esse objeto em toda renderização sem necessidade.
  const handlers = useMemo(
    () => ({
      onPressHome: () => scrollToY(0),
      onPressDestinations: () => scrollToY(destinationsY),
      onPressContact: () => scrollToY(footerY),
    }),
    [destinationsY, footerY]
  );

  return (
    // flex: 1 faz o conteúdo ocupar a altura da tela (padrão em React Native).
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollRef}
        // Espaço extra embaixo para o botão flutuante do WhatsApp não cobrir o rodapé.
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Spread {...handlers} passa onPressHome, onPressDestinations e onPressContact como props */}
        <Header {...handlers} />
        <Hero onPressPackage={handlers.onPressDestinations} />

        {/* onLayout dispara quando o layout é medido; guardamos o Y da seção destinos */}
        <View onLayout={(e) => setDestinationsY(e.nativeEvent.layout.y)}>
          <Destinations />
        </View>

        <View onLayout={(e) => setFooterY(e.nativeEvent.layout.y)}>
          <Footer />
        </View>
      </ScrollView>

      {/* Fora do ScrollView: fica "por cima" (posição absoluta no componente WhatsAppButton) */}
      <WhatsAppButton />
    </View>
  );
}
