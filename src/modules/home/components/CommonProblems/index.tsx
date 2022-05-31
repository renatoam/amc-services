import { commonProblems } from "@home/constants";
import { useMediaQuery } from "@mui/material";
import Icon from "@shared/components/atoms/Icon";
import Link from "@shared/components/atoms/Link";
import Text from "@shared/components/atoms/Text";
import { CommonProblem, CommonProblemsCard, CommonProblemsWrapper } from "./styles";

export default function CommonProblems() {
  const matches = useMediaQuery('(min-width: 60rem)')

  return (
    <CommonProblemsWrapper>
      {commonProblems.map(problem => {
        return (
          <CommonProblem key={problem.id}>
            <CommonProblemsCard>
            <Link href={problem.link}>
              <Icon variant="default" MuiIcon={problem.icon} />
            </Link>
          </CommonProblemsCard>
          <Text size={matches ? 'regular' : 'small'}>{problem.description}</Text>
          </CommonProblem>
        )
      })}
    </CommonProblemsWrapper>
  )
}