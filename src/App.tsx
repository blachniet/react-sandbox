import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useForm, Controller, useFormState } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { DateTime, Duration } from 'luxon';
import { useState } from 'react';
import Schedule from '@mui/icons-material/Schedule';

function App() {
  const {control, handleSubmit, reset} = useForm<IFormData>();
  const {isDirty, isSubmitted, errors} = useFormState({control});
  const [remaining, setRemaining] = useState<Duration>();
  const [doneAt, setDoneAt] = useState<DateTime>();

  const handleValidSubmit = (formData: IFormData) => {
    const target = Duration.fromObject({
      hours: parseFloat(formData.targetHours),
      minutes: parseFloat(formData.targetMinutes),
    });
    const worked = Duration.fromObject({
      hours: parseFloat(formData.workedHours),
      minutes: parseFloat(formData.workedMinutes),
    });
    const breakDuration = Duration.fromObject({
      hours: parseFloat(formData.breakHours),
      minutes: parseFloat(formData.breakMinutes),
    });

    const r = target.minus(worked);
    setRemaining(r);
    setDoneAt(DateTime.now().plus(r).plus(breakDuration));

    reset(undefined, {
      keepValues: true,
      keepIsSubmitted: true,
    });
  };

  return (
    <Container fixed>
      <Typography component="h1" variant="h4"><Schedule />&nbsp;Watchin' the Clock</Typography>
      <form onSubmit={handleSubmit(handleValidSubmit)}>
        <InputLabel>Target</InputLabel>
        <Controller
          name="targetHours"
          defaultValue="8"
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              error={!!errors.targetHours}
              helperText={errors.targetHours?.message}
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
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              error={!!errors.targetMinutes}
              helperText={errors.targetMinutes?.message}
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
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              autoFocus
              type="number"
              error={!!errors.workedHours}
              helperText={errors.workedHours?.message}
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
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              error={!!errors.workedMinutes}
              helperText={errors.workedMinutes?.message}
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
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              error={!!errors.breakHours}
              helperText={errors.breakHours?.message}
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
          rules={{
            required: 'Required',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              error={!!errors.breakMinutes}
              helperText={errors.breakMinutes?.message}
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
      {!isDirty && isSubmitted ? (
        <Typography>
          You have <strong>{remaining?.toFormat("h'h'm'm'")}</strong> left to work. You will be done at <strong>{doneAt?.toLocaleString(DateTime.TIME_SIMPLE)}</strong>.
        </Typography>
      ) : ''}
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
