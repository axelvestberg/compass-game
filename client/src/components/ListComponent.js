import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ListComponent = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Link to="/game-id"><Button>Join</Button></Link>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>GameName1</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Link to="/game-id"><Button>Join</Button></Link>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>GameName2</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Link to="/game-id"><Button>Join</Button></Link>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
      <List.Content>GameName3</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Link to="/game-id"><Button>Join</Button></Link>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
      <List.Content>GameName4</List.Content>
    </List.Item>
  </List>
)

export default ListComponent