import React from 'react'
import NewsCard from './NewsCard'
import styled from 'styled-components'

export default {
  title: 'Tutorials/Design System/News-Card',
  component: NewsCard,
}

const Container = styled.div`
  max-width: 400px;
  height: 500px;
`

export const Primary = () => (
  <Container>
    <NewsCard
      heading='Creating designs in figma'
      summary='Hello new card'
      label='Tutorial'
      author='Nikhil'
      date='June, 02 21'
      imageSrc='https://www.abc.net.au/news/image/12239034-3x2-940x627.jpg'
      avatarImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQc7ygBeqDXtSmyyoNA9uhfwi5apEwEn4_w&usqp=CAU'
    />
  </Container>
)
