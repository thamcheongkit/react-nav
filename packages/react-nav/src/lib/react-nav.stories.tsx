import { PropsWithChildren } from 'react';
import Nav from './component/nav';
import './react-nav.stories.css';

export default {};

function Div(props: PropsWithChildren) {
  return <div style={{ margin: 4 }}>{props.children}</div>;
}

export const Main = () => {
  return (
    <>
      <Nav.Group>
        <Nav.List>
          <Nav navId={1}>😀 People</Nav>
          <Nav navId={2}>🐵 Animals</Nav>
          <Nav navId={3}>🚀 Space</Nav>
          <Nav navId={4}>🍉 Food</Nav>
        </Nav.List>

        <Nav.Panels>
          <Nav.Panel navId={1}>
            <Div>😀 Grinning Face</Div>
            <Div>😃 Grinning Face with Big Eyes</Div>
            <Div>😄 Grinning Face with Smiling Eyes</Div>
            <Div>😁 Beaming Face with Smiling Eyes</Div>
            <Div>😆 Grinning Squinting Face</Div>
            <Div>😅 Grinning Face with Sweat</Div>
            <Div>🤣 Rolling on the Floor Laughing</Div>
          </Nav.Panel>
          <Nav.Panel navId={2}>
            <Div>🙈 See-No-Evil Monkey</Div>
            <Div>🙉 Hear-No-Evil Monkey</Div>
            <Div>🙊 Speak-No-Evil Monkey</Div>
            <Div>💥 Collision</Div>
            <Div>💫 Dizzy</Div>
            <Div>💦 Sweat Droplets</Div>
            <Div>💨 Dashing Away</Div>
          </Nav.Panel>
          <Nav.Panel navId={3}>
            <Div>🚀 Rocket</Div>
            <Div>🛸 Flying Saucer</Div>
            <Div>🪐 Ringed Planet</Div>
            <Div>🌠 Shooting Star</Div>
            <Div>🌌 Milky Way</Div>
          </Nav.Panel>
          <Nav.Panel navId={4}>
            <Div>🍇 Grapes</Div>
            <Div>🍈 Melon</Div>
            <Div>🍉 Watermelon</Div>
            <Div>🍊 Tangerine</Div>
            <Div>🍋 Lemon</Div>
            <Div>🍌 Banana</Div>
          </Nav.Panel>
        </Nav.Panels>
      </Nav.Group>
    </>
  );
};
