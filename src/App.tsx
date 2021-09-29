import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import { DateTime, Duration } from 'luxon';

function App() {
  const {control, handleSubmit} = useForm<IFormData>();

  const handleValidSubmit = (formData: IFormData) => {
    const target = Duration.fromObject({
      hours: parseFloat(formData.targetHours),
      minutes: parseFloat(formData.targetMinutes)
    });
    const worked = Duration.fromObject({
      hours: parseFloat(formData.workedHours),
      minutes: parseFloat(formData.workedMinutes),
    });
    const breakDuration = Duration.fromObject({
      hours: parseFloat(formData.breakHours),
      minutes: parseFloat(formData.breakMinutes),
    });
    const remaining = target.minus(worked);
    const done = DateTime.now().plus(remaining).plus(breakDuration);

    console.log('remaining', remaining.toString());
    console.log('done at', done.toString());
  };

  return (
    <Container fixed>
      <form onSubmit={handleSubmit(handleValidSubmit)}>
        <InputLabel>Target</InputLabel>
        <Controller
          name="targetHours"
          defaultValue="8"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">h</InputAdornment>,
              }}
            />
          )}
          control={control}
        />
        <Controller
          name="targetMinutes"
          defaultValue="0"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              }}
            />
          )}
          control={control}
        />
        <InputLabel>Worked</InputLabel>
        <Controller
          name="workedHours"
          defaultValue="0"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">h</InputAdornment>,
              }}
            />
          )}
          control={control}
        />
        <Controller
          name="workedMinutes"
          defaultValue="0"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              }}
            />
          )}
          control={control}
        />       
        <InputLabel>Breaks left</InputLabel>
        <Controller
          name="breakHours"
          defaultValue="0"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">h</InputAdornment>,
              }}
            />
          )}
          control={control}
        />
        <Controller
          name="breakMinutes"
          defaultValue="0"
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              sx={{width: '10ch'}}
              InputProps={{
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              }}
            />
          )}
          control={control}
        />
        <Box py={1}>
          <Button variant="contained" type="submit">Calculate</Button>
        </Box>
      </form>
    </Container>
  );
}

export default App;

interface IFormData {
  targetHours: string;
  targetMinutes: string;
  workedHours: string;
  workedMinutes: string;
  breakHours: string;
  breakMinutes: string;
};
