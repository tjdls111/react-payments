import React, { useState } from 'react'
import './App.css'
import CardList from './pages/CardList.tsx'
import AddCard, { CardData } from './pages/AddCard/index.tsx'

export type PAGE_TYPE = '카드목록' | '카드추가'

function App() {
  const [page, setPage] = useState<PAGE_TYPE>('카드목록')
  const defaultCardList = [
    {
      numberOne: '1111',
      numberTwo: '2222',
      numberThree: '3333',
      numberFour: '4444',
      expiredMonth: '12',
      expiredYear: '26',
      ownerName: 'Teddy',
      CVC: '123',
      passwordOne: '1',
      passwordTwo: '2',
      nickname: '엄카',
      companyName: '신한은행',
    },
    {
      numberOne: '1111',
      numberTwo: '2222',
      numberThree: '3333',
      numberFour: '4444',
      expiredMonth: '12',
      expiredYear: '26',
      ownerName: 'Teddy',
      CVC: '123',
      passwordOne: '1',
      passwordTwo: '2',
      nickname: '내 카드',
      companyName: '우리은행',
    },
  ]

  const [cardList, setCardList] = useState(defaultCardList)

  const addCardList = (newCard: CardData) => {
    setCardList([newCard, ...cardList])
  }

  return (
    <div className="App">
      {page === '카드목록' && (
        <CardList setPage={setPage} cardList={cardList} />
      )}
      {page === '카드추가' && (
        <AddCard setPage={setPage} addCardList={addCardList} />
      )}
    </div>
  )
}

export default App
