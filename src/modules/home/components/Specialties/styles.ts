import styled from "@emotion/styled";
import Accordion from "@shared/components/molecules/Accordion";

interface SpecialtiesCardProps {
  image: string
}

export const SpecialtiesWrapper = styled.section`
  display: flex;
  justify-content: center;
`

export const SpecialtiesCard = styled.section<SpecialtiesCardProps>`
  --card-size: 40rem;

  align-items: flex-end;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  display: flex;
  height: var(--card-size);
  overflow: hidden;
  width: var(--card-size);

  &:first-of-type {
    .shine {
      box-shadow: 0 0 1.5rem 1.5rem rgb(148 112 255 / 60%);
    }

    > section {
      background-color: rgb(148 112 255 / 50%);
    }

    figure.circular {
      background-color: var(--primary-500);
    }
  }

  &:nth-of-type(2) {
    .shine {
      box-shadow: 0 0 1.5rem 1.5rem rgb(255 200 74 / 60%);
    }

    > section {
      background-color: rgb(255 200 74 / 50%);
    }

    figure.circular {
      background-color: var(--secondary-500);

      svg {
        color: var(--neutral-700);
      }
    }
  }

  &:nth-of-type(3) {
    .shine {
      box-shadow: 0 0 1.5rem 1.5rem rgb(163 159 179 / 50%);
    }

    > section {
      background-color: rgb(163 159 179 / 50%);
    }

    figure.circular {
      background-color: var(--neutral-500);
    }
  }
`

export const SpecialtiesOverlay = styled.section`
  display: grid;
  height: 100%;
  place-content: center;
  text-align: center;

  > h2 {
    color: var(--white);
    margin: auto;
    max-width: 70%;
  }

  figure.circular svg {
    font-size: 6rem;
  }
`

export const SpAccordion = styled(Accordion)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;

  figure {
    transition: all .4s ease-in-out;
  }

  input {
    &:checked {
      ~ label {
        .shine {
          animation: pulse;
          animation-duration: infinite;
        }

        figure {
          bottom: 3%;
          height: 4rem;
          left: 40%;
          position: absolute;
          transform: rotate(180deg) translate(-50%, -50%);
          width: 4rem;

          svg {
            font-size: 4rem;
          }
        }
      }
    }
  }

  .content p {
    color: var(--white);
    font-weight: 100;
    line-height: 1.7;
    padding: 0;
    padding-bottom: 2rem;
    width: 100%;
  }

  .shine {
    box-shadow: 0 0 1.5rem 1.5rem rgb(148 112 255 / 60%);
    border-radius: 100%;
    animation: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`

