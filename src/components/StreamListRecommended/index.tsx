import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  List,
  StreamContainerAll,
  StreamContainer,
  StreamThumbail,
  StreamColumn,
  StreamRow,
  StreamDots,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from "./styles";
import colors from "../../styles/colors";

const StreamListRecommended: React.FC = () => {
  const StreamItem = () => (
    <StreamContainerAll>
      <StreamContainer>
        <StreamThumbail source={streamThumbnail} />
        <StreamColumn>
          <StreamRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>eduh_oficial</StreamUsername>
            </StreamHeader>

            <StreamDescription numberOfLines={1}>
              Front-end com React.Js, e GraphQL
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamRow>

          <TagRow>
            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>
            <TagView>
              <TagText>Web Development</TagText>
            </TagView>
          </TagRow>
        </StreamColumn>
      </StreamContainer>

      <StreamDots>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={30}
          color={colors.black}
        />
      </StreamDots>
    </StreamContainerAll>
  );
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamListRecommended;
