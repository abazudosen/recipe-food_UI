import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons'

export default function App() {

  const recipes = [
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image: require('./assets/padthai.jpg')
    },
    {
      name: 'Seared Scallops with Romesco Sauce',
      info: '20 min | 5 servings',
      image: require('./assets/scallops.jpg')
    },
    {
      name: 'Grilled Chicken with lemon Butter',
      info: '55 min | 3 servings',
      image: require('./assets/chicken.jpg')
    }
  ]

  return (
    <Container>
      <StatusBar barStyle='light-content' />
      <RecipeBackground source={require('./assets/main.jpg')}>
          <SafeAreaView>
            <MenuBar>
              <Back>
                <AntDesign name="arrowleft" size={24} color="#FFF" />
                <Text style={{marginLeft: 10}}>Ingredient</Text>
              </Back>
              <AntDesign name="heart" size={24} color="#FFF" />
            </MenuBar>
            <MainRecipe>
              <Text title heavy>Egusi and Fufu</Text>
              <Divder />
              <Text bold> 125 calories per 100g </Text>
              <Text> 1.5g fat | 15g protein | 17 carbs </Text>
            </MainRecipe>
            <Button>
              <Text bold small>
                VIEW MORE
              </Text>
            </Button>
          </SafeAreaView>
      </RecipeBackground>
      <RecipeContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark small>
          18 recipes a
        </Text>
        <Recipes>
            {recipes.map((recipe, index) => {
              return (
                <Recipe key={index}>
                    <RecipeImage source={recipe.image} />
                    <RecipeInfo>
                      <Text dark bold>{recipe.name}</Text>
                      <Text dark small>{recipe.info}</Text>
                    </RecipeInfo>

                    <AntDesign name='heart' size={16} color='#000' />
                </Recipe>
              )
            })}
        </Recipes>
      </RecipeContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? '#000' : '#FFF')};
  font-family: 'AvenirNext-Regular';

  ${({title, large, small}) => {
    switch(true) {
      case title:   
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`
    }
  }}

  ${({bold, heavy}) => {
    switch(true) {
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}
`;

const RecipeBackground =  styled.ImageBackground`
  width: 100%
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px; 
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divder = styled.View`
  border-bottom-color: #FFF;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;     

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;
  
const RecipeContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;

`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px
`;

const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;