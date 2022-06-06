import Countdown from "react-countdown-now";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export const CountDown = (props: any) => {
  const timer = (date: any) => {
    return (
      <>
        <Stack
          direction="row"
          divider={
            <Divider className="divider" orientation="vertical" flexItem />
          }
          spacing={2}
        >
          <div>{date.days} D</div>
          <div>{date.hours} H</div>
          <div>{date.minutes} M</div>
          <div>{date.seconds} S</div>
        </Stack>
      </>
    );
  };
  return (
    <>
      <Countdown
        date={props.date}
        intervalDelay={1000}
        renderer={(date) => timer(date)}
      />
    </>
  );
};
