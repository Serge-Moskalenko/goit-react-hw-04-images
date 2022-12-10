import React,{Component} from "react";
import { AppStyled } from "./App.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { ApiServise } from "./ApiServise";

const apiServise = new ApiServise();

export class App extends Component{

  state = {
    images:null,
  }

  componentDidMount() {

   apiServise.fetch().then(images =>this.setState({images}))
  }

  queryParameter = q => {
    console.log(q)
  }

  render() {
    return (
    <AppStyled>
        <Searchbar query={ this.queryParameter} />
      <ImageGallery/>
    </AppStyled>
  );
  }
  
};
