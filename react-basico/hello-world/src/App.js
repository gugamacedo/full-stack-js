import React from 'react' // igual o require() do Node mas é um shortcut

import Header from './Header' // é um arquivo, não módulo igual acima, lembra do Node
import Content from './Content'
import Card from './Card'
import Cards from './Cards'

import logo from './logo.svg' // tem que importar as imagens

/* const p = document.createElement('p')
p.innerText = 'Oi'
document.querySelector('body').appendChild(p) */

function App() {
  return (
    <>
      <Header title="[REACTEIRO]" image={logo} />
      <h1>Hello World</h1>
      <Content title="Artigos">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>

        <Cards>
          <Card
            title="Título Um"
            image={logo}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book."
          />
          <Card
            title="Título Dois"
            image={logo}
            description="It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged."
          />
          <Card
            title="Título Dois"
            image={logo}
            description=" It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />
        </Cards>
      </Content>
    </>
  )
}
export default App // igual o module.exports do Node mas é um shortcut
