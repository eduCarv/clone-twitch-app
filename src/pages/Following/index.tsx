import React from "react";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import StreamListRecommended from "../../components/StreamListRecommended";
import ChannelList from "../../components/ChannelList";

import { Wrapper, Container, Main } from "./styles";
import { View, FlatList } from 'react-native';

interface Item {
  key: string; //Chave
  render: () => JSX.Element; //Elemento de renderização ( nesse caso um componente react)
  isTitle?: boolean; // Se é um título ou outra coisa
}


const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Seguindo</Heading>,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Categorias Seguidas</Title>,
        isTitle: true,
      },
      { key: 'c1', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Canais ao Vivo</Title>,
        isTitle: true,
      },
      { key: 'c2', render: () => <StreamList /> },

      {
        key: 'RECOMMENDED_CHANNELS',
        render: () => <Title>Canais Recomendados</Title>,
        isTitle: true,
      },
      { key: 'c3', render: () => <StreamListRecommended /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continuar Assistindo</Title>,
        isTitle: true,
      },
      { key: 'c4', render: () => <StreamList /> },
      
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Canais Offline</Title>,
        isTitle: true,
      },
      { key: 'c5', render: () => <ChannelList /> },
      
    ];

    // Array que contém apenas os indeces dos elementos que são títulos
    const indices: number[] = [];

    // Se o item for título ele entra no array.
    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }


  }, []);



  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item> 
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>

      </Container>
    </Wrapper>
  );
};

export default Following;
