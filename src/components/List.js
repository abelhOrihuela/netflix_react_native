import React,{ Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'

const shows_first=[
  {key: 1, name: 'The Walking Dead- Season 1', image: 'https://portadas.seriesgato.com/the-walking-dead-153021-p-200x294.jpg'},
  {key: 2, name: 'The Walking Dead- Season 2', image: 'http://i863.photobucket.com/albums/ab192/lifeongoldplates/walking_dead_one_sheet_poster.jpg'},
  {key: 3, name: 'The Walking Dead- Season 3', image: 'http://es.web.img2.acsta.net/medias/nmedia/18/78/35/82/20303823.jpg'}
]


const shows_second=[
  {key: 1, name: 'Hola', image: 'https://portadas.seriesgato.com/the-walking-dead-153021-p-200x294.jpg'},
  {key: 2, name: 'Hola', image: 'https://portadas.seriesgato.com/the-walking-dead-153021-p-200x294.jpg'},
  {key: 3, name: 'Hola', image: 'https://portadas.seriesgato.com/the-walking-dead-153021-p-200x294.jpg'}
]
class List extends Component {

  _renderItem(item){
    return(<Image
      source={{uri: item.image}}
      style={{width: 170, height:190}}
      />)
    }
    render(){
      return(
        
        <View style={{flex: 1}}>
        <FlatList
        horizontal
        renderItem={({item}) => this._renderItem(item) }
        data={ shows_first }/>
        </View>

      )
    }
  }

  export default List
