import React from "react";
import styled from "styled-components";
function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://flxt.tmsimg.com/assets/p18535690_b_h8_ac.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cdn.flickeringmyth.com/wp-content/uploads/2021/11/Hawkeye-1-600x739-1.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5091/875091-h"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://flxt.tmsimg.com/assets/p18535690_b_h8_ac.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cdn.flickeringmyth.com/wp-content/uploads/2021/11/Hawkeye-1-600x739-1.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5091/875091-h"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
