import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {IPosts} from '../../../models/postModel';

const renderPostItems = ({item}: {item: IPosts}) => {
  return <Text>{item.title}</Text>;
};

interface IPostList {
  posts: IPosts[];
}

export const PostList: React.FC<IPostList> = (props: IPostList) => {
  const {posts} = props;
  return (
    <FlatList
      data={posts}
      keyExtractor={(_, i) => i.toString()}
      renderItem={renderPostItems}
    />
  );
};
