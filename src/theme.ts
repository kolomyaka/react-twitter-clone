import { createTheme } from "@mui/system";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
          ].join(','),
    },
    palette: {
        text: {
            primary: {
                main: 'rgb(29,161,242)',
                dark: 'rgb(26,145,218)',
                contrastText: '#fff',
                
            },
            secondary: {
                main: 'rgb(26,145,218)',
            },
            error: {
                main: '#f44336'
            },
            background: {
                default: '#fff',
            },
        }
    },
    shadows: [],
    components: {
        MuiFilledInput: {
            underline: {
                '&:after' : {
                    borderbottomWidth: '2px',
                },
                '&:before' : {
                    borderColor: '#000',
                    borderbottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)',
            },
        },
        MuiDialog: {
            paper: {
                borderRaduis: 15,
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 230, 230)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2' : {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button' : {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    }
})