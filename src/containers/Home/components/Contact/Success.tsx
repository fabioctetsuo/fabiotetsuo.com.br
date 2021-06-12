import { Typography } from "@material-ui/core"
import * as React from "react"
import gsap from "gsap"

const Success = () => {
  React.useEffect(() => {
    const successEmailTl = gsap.timeline({
      paused: true,
    })
    successEmailTl.fromTo(
      "#success-mail",
      { xPercent: 100 },
      { xPercent: 0, duration: 1, opacity: 1 },
      0
    )
    successEmailTl.to(
      "#mail-success-icon",
      { strokeDashoffset: 0, duration: 1 },
      1
    )
    successEmailTl.to("#mail-success-text", { opacity: 1 }, 1)
    successEmailTl.play()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <svg
        viewBox="0 0 570 512"
        fill="none"
        style={{ width: "200px", maxWidth: "80vw" }}
      >
        <g id="success-mail" opacity="0">
          <path
            id="Vector"
            d="M564.999 195.675C564.795 195.675 564.596 195.612 564.428 195.496L287.87 2.89208C287.028 2.30868 286.028 1.9969 285.004 1.99865C283.98 2.0004 282.981 2.31558 282.141 2.90185L7.57436 195.494C7.35718 195.646 7.08841 195.706 6.82713 195.66C6.56586 195.614 6.33349 195.466 6.18117 195.249C6.02884 195.032 5.96902 194.763 6.01488 194.502C6.06073 194.241 6.2085 194.008 6.42567 193.856L280.993 1.26415C282.168 0.443505 283.567 0.00236562 285.001 9.48758e-06C286.434 -0.00234665 287.834 0.434189 289.013 1.25097L565.571 193.854C565.746 193.976 565.878 194.15 565.946 194.352C566.015 194.553 566.018 194.771 565.954 194.974C565.89 195.178 565.763 195.355 565.591 195.481C565.42 195.607 565.212 195.675 564.999 195.675L564.999 195.675Z"
            fill="#000"
          />
          <path
            id="Vector_2"
            d="M23.264 202.502L285.276 8.31909L549.276 216.319L298.776 364.819L162.776 333.819L23.264 202.502Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_3"
            d="M174.256 456.541H44.8152C44.0204 456.542 43.2332 456.386 42.4986 456.083C41.764 455.78 41.0964 455.334 40.5341 454.773C39.9717 454.211 39.5256 453.544 39.2212 452.81C38.9168 452.075 38.7601 451.288 38.7601 450.494C38.7601 449.699 38.9168 448.912 39.2212 448.178C39.5256 447.443 39.9717 446.776 40.5341 446.215C41.0964 445.653 41.764 445.208 42.4986 444.904C43.2332 444.601 44.0204 444.445 44.8152 444.446H174.256C175.05 444.445 175.838 444.601 176.572 444.904C177.307 445.208 177.974 445.653 178.537 446.215C179.099 446.776 179.545 447.443 179.85 448.178C180.154 448.912 180.311 449.699 180.311 450.494C180.311 451.288 180.154 452.075 179.85 452.81C179.545 453.544 179.099 454.211 178.537 454.773C177.974 455.334 177.307 455.78 176.572 456.083C175.838 456.386 175.05 456.542 174.256 456.541V456.541Z"
            fill="#6A5ACD"
          />
          <path
            id="Vector_4"
            d="M91.2555 430.541H44.8152C44.0204 430.542 43.2332 430.386 42.4986 430.083C41.764 429.78 41.0964 429.334 40.5341 428.773C39.9717 428.211 39.5256 427.544 39.2212 426.81C38.9168 426.075 38.7601 425.288 38.7601 424.494C38.7601 423.699 38.9168 422.912 39.2212 422.178C39.5256 421.443 39.9717 420.776 40.5341 420.215C41.0964 419.653 41.764 419.208 42.4986 418.904C43.2332 418.601 44.0204 418.445 44.8152 418.446H91.2555C92.0503 418.445 92.8375 418.601 93.5721 418.904C94.3067 419.208 94.9743 419.653 95.5367 420.215C96.0991 420.776 96.5452 421.443 96.8496 422.178C97.154 422.912 97.3107 423.699 97.3107 424.494C97.3107 425.288 97.154 426.075 96.8496 426.81C96.5452 427.544 96.0991 428.211 95.5367 428.773C94.9743 429.334 94.3067 429.78 93.5721 430.083C92.8375 430.386 92.0503 430.542 91.2555 430.541Z"
            fill="#6A5ACD"
          />
          <path
            id="Vector_5"
            d="M288.96 310.659C287.976 310.66 287.002 310.47 286.091 310.097L124.5 243.049V33.1746C124.502 31.3187 125.241 29.5395 126.553 28.2272C127.865 26.9149 129.644 26.1767 131.5 26.1746H441.5C443.356 26.1767 445.135 26.9149 446.448 28.2272C447.76 29.5395 448.498 31.3187 448.5 33.1746V243.195L448.196 243.325L291.916 310.065C290.98 310.458 289.975 310.66 288.96 310.659Z"
            fill="white"
          />
          <path
            id="Vector_6"
            d="M288.96 311.159C287.911 311.16 286.872 310.957 285.901 310.56L124 243.383V33.1746C124.002 31.1861 124.793 29.2798 126.199 27.8737C127.605 26.4677 129.512 25.6768 131.5 25.6746H441.5C443.489 25.6768 445.395 26.4677 446.801 27.8737C448.207 29.2798 448.998 31.1861 449 33.1746V243.525L292.112 310.524C291.115 310.944 290.043 311.16 288.96 311.159V311.159ZM126 242.047L286.663 308.711C288.162 309.319 289.84 309.309 291.331 308.683L447 242.205V33.1746C446.999 31.7164 446.419 30.3185 445.387 29.2874C444.356 28.2563 442.958 27.6763 441.5 27.6746H131.5C130.042 27.6763 128.644 28.2563 127.613 29.2874C126.582 30.3185 126.002 31.7164 126 33.1746L126 242.047Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_7"
            d="M563 193.675H562.8L448 242.695L290.93 309.765C290.316 310.023 289.658 310.158 288.992 310.161C288.326 310.165 287.666 310.037 287.05 309.785L125 242.555L7.37988 193.755L7.2002 193.675H7C5.14412 193.677 3.36483 194.415 2.05252 195.727C0.740212 197.04 0.00205925 198.819 0 200.675V504.675C0.00206189 506.531 0.740213 508.31 2.05252 509.622C3.36483 510.935 5.14412 511.673 7 511.675H563C564.856 511.673 566.635 510.935 567.947 509.622C569.26 508.31 569.998 506.531 570 504.675V200.675C569.998 198.819 569.26 197.04 567.947 195.727C566.635 194.415 564.856 193.677 563 193.675V193.675ZM568 504.675C567.999 506.001 567.473 507.272 566.535 508.21C565.597 509.147 564.326 509.674 563 509.675H7C5.67408 509.674 4.40262 509.147 3.46506 508.21C2.52749 507.272 2.00053 506.001 2 504.675V200.675C2.00181 199.382 2.50336 198.14 3.39978 197.208C4.2962 196.276 5.5181 195.727 6.81006 195.675L125 244.715L286.28 311.635C288.026 312.345 289.982 312.334 291.72 311.605L448 244.865L563.2 195.675C564.49 195.73 565.708 196.281 566.602 197.213C567.496 198.144 567.997 199.384 568 200.675V504.675Z"
            fill="#3F3D56"
          />
          <path
            id="mail-success-icon"
            d="M223.5 170.5L286 224.5L400 74"
            stroke="#6A5ACD"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={272}
            strokeDashoffset={272}
          />
        </g>
      </svg>
      <Typography
        variant="body1"
        style={{ marginTop: "2rem", opacity: 0 }}
        id="mail-success-text"
      >
        Seu e-mail foi enviado com sucesso, eu vou entrar em contato logo logo
      </Typography>
    </div>
  )
}

export default Success