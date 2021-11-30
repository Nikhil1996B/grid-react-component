import React from 'react'
import styled from 'styled-components'
import './NewsCard.styles.css'

const Container = styled.article`
  background: #ffffff;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 450px;
  font-family: Inter;
`

const Image = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  justify-content: space-between;
  height: 100%;
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`

const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`

const Summary = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #9c9c9c;
`

const ButtonInformation = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: flex-start;
  padding: 16px;
`

const Label = styled.span`
  font-size: 14px;
  line-height: 20px;
  background: #d1fae5;
  border-radius: 12px;
  color: #065f46;
  padding: 4px 8px;
`

const AvatarAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
`

const AvatarImage = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  object-fit: cover;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`
const Author = styled.div`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`

const Date = styled.div`
  font-family: Inter;
  font-wight: normal;
  font-size: 14px;
  line-height: 20px;
`

interface NewsCardProps {
  heading: string
  summary: string
  label: string
  avatarImage: string
  author: string
  date: string
  imageSrc: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  heading,
  summary,
  label,
  avatarImage,
  author,
  date,
  imageSrc,
}) => {
  return (
    <Container>
      <Image src={imageSrc} />
      <Layout>
        <Copy>
          <Heading>{heading}</Heading>
          <Summary>{summary}</Summary>
        </Copy>
        <ButtonInformation>
          <Label>{label}</Label>
          <AvatarAndText>
            <AvatarImage src={avatarImage} />
            <Info>
              <Author>{author}</Author>
              <Date>{date}</Date>
            </Info>
          </AvatarAndText>
        </ButtonInformation>
      </Layout>
    </Container>
  )
}

export default NewsCard
