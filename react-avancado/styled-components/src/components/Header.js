import styled from 'styled-components'

const Square = styled.div`
  width: 200px;
  height: 200px;
  background-color: violet;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blueviolet;
`

const Header = () => (
  <Square>
    <Ball>
      <h3>Teste</h3>
    </Ball>
  </Square>
)

export default Header
