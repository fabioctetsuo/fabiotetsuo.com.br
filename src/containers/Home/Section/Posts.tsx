import * as React from "react"
import styled from "styled-components"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Tween, PlayState } from "react-gsap"
import { navigate } from "gatsby"
import { PostProps } from "../../../types/Post"
import useOnScreen from "../../../hooks/useOnScreen"
import Post from "../../../components/Post/Item"

const ContainerWrapper = styled.div`
  background: var(--darkBackground);
  padding-top: 56px;
  margin-top: 72px;
`

function Posts({ posts }: { posts: PostProps[] }) {
  const svgRef = React.useRef(null)
  const onScreen = useOnScreen(svgRef)
  const [playAnimation, setPlayAnimation] = React.useState(PlayState.stop)

  React.useEffect(() => {
    if (onScreen) setPlayAnimation(PlayState.play)
  }, [onScreen])

  return (
    <ContainerWrapper>
      <Container ref={svgRef}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{ fontWeight: 300 }}
              color="textPrimary"
            >
              Coisas que eu compartilhei
            </Typography>
            <Typography
              style={{ maxWidth: "544px", margin: "24px 0 32px 0" }}
              color="textPrimary"
            >
              Acredito que compartilhar conhecimento seja uma das coisas mais
              importantes, por isso tento sempre escrever alguns posts sobre
              códigos ou coisas aleatórias que acho legal compartilhar.
            </Typography>
          </Grid>
          <Tween from={{ x: "200%" }} stagger={0.5} playState={playAnimation}>
            {posts.map(({ node }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={node.id}
                style={{ paddingBottom: 16 }}
              >
                <Post
                  slug={node.fields.slug}
                  item={node.frontmatter}
                  timeToRead={node.timeToRead}
                />
              </Grid>
            ))}
          </Tween>
          <Grid container item xs={12} justify="flex-end" alignItems="flex-end">
            <Button
              style={{ marginBottom: "56px" }}
              onClick={() => navigate("/blog")}
            >
              Ver todos os posts
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ContainerWrapper>
  )
}

export default Posts