import { useState }from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import { Button } from '@material-ui/core';
import '../../App.css'
import {Project} from '../../models/project'

const projects: Project[] = [
  { title: "Project1", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project2", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project3", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project4", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project5", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project6", date: '20/05/2021', owner: 'keti khetsuriani' },
  { title: "Project7", date: '20/05/2021', owner: 'keti khetsuriani' },
];

const ProjectTable = () => {
  const perPage: number = 5
  const [page, setPage] = useState(0);
  const [dataProject, setDataProject] = useState<Project[]>(projects);
  const [ input, setInput] = useState('')

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const inputHandler = (value: string) => {
    setInput(value) ;
    const filteredProject = projects.filter((row) => {
      return row.title.toLowerCase() === value.toLowerCase()
    });
    setDataProject(filteredProject);
 }

  const cancelSearch = () => {
    inputHandler('');
    setDataProject(projects);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
       <TextField 
          type = "search"
          value={input}
          onChange={(e) => inputHandler(e.target.value)}
        />
        {/* <Button variant="contained"  onClick={() => requestSearch(input)}>Search</Button>
        <Button variant="contained"  onClick={() => cancelSearch()}>Clear</Button> */}
      <TableContainer>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Project Title</TableCell>
                <TableCell >Date</TableCell>
                <TableCell >Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataProject.slice(page * perPage, page * perPage + perPage)
              .map((data: Project) => (
                <TableRow key={data.title}>
                  <TableCell component="th" scope="row">
                    {data.title}
                  </TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell >{data.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={dataProject.length}
          rowsPerPage={perPage}
          page={page}
          onPageChange={handleChangePage}
        />
    </Paper>
  )
}

export default ProjectTable;