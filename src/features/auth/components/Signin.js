import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { signin } from "../actions/authActionCreators";
import { ParagraphSmall, HeadingLarge } from "../../../components/typography";
import constants from "../../../constants";
import SigninForm from "./SigninForm";
import Logo from "../../common/Logo";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const Header = styled.header`
  padding: 2rem 2rem 1rem 2rem;
`;

const Main = styled.main`
  padding: 1rem;
  @media (min-width: ${constants.BREAKPOINTS.SMALL_DEVICES}) {
    margin: 0 auto;
    max-width: 24rem;
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  text-align: center;
`;

const StyledHeadingLarge = styled(HeadingLarge)`
  font-family: Bebas Neue;
`;

const StyledLink = styled(Link)`
  padding-bottom: 0.14rem;
  border-bottom: 2px solid ${(props) => `${props.theme.colors.accent}7F`};
  color: ${(props) => props.theme.colors.accent};
`;

function Signin() {
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(formik) {
    dispatch(signin(formik.values, { formik, history }));
  }

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Main>
        <HeadingWrapper>
          <StyledHeadingLarge>Sign in</StyledHeadingLarge>
          <ParagraphSmall>
            Don’t have an account?{" "}
            <StyledLink to="/signup">Sign up here</StyledLink>
          </ParagraphSmall>
        </HeadingWrapper>
        <SigninForm onSubmit={onSubmit} />
      </Main>
    </Container>
  );
}

export default Signin;
