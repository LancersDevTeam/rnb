// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Body, Card, CardItem, Left, Text } from 'native-base'
import { DeckSwiper } from 'app/components'

const cards = [
  {
    text: 'Card One',
    name: 'One'
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DeckSwiper
        dataSource={cards}
        renderItem={item => (
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text>dummy</Text>
            </CardItem>
            <CardItem>
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        )}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
