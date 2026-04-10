import { useMemo, useState } from 'react';
import { Edit2, Eye, Trash } from 'iconsax-reactjs';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SearchNormal1 } from 'iconsax-reactjs';
import { Link as RouterLink } from 'react-router-dom';

// project-imports
import MainCard from 'components/MainCard';

const rows = [
  {
    id: 1,
    name: 'Airi Satou',
    mobile: '(123) 4567 890',
    date: '2023/02/07',
    time: '09:05 PM',
    salary: 45500,
    loans: 'No loans',
    executiveName: 'Abhay',
    executiveEmail: 'abhay@crednidhi.com',
    supervisorName: 'Radha',
    supervisorEmail: 'radha@crednidhi.com',
    reloanStatus: 'PENDING',
    marketingSource: 'app.crednidhi.com',
    onboardingStatus: 'Bank Details 58%',
    status: 'Active',
    plan: 'Casual'
  },
  {
    id: 2,
    name: 'Ashton Cox',
    mobile: '(123) 4567 890',
    date: '2023/02/01',
    time: '02:14 PM',
    salary: 25000,
    loans: 'Total Loans: 1',
    executiveName: 'Anamika',
    executiveEmail: 'anamika.bora@crednidhi.com',
    supervisorName: 'Suman',
    supervisorEmail: 'suman@crednidhi.com',
    reloanStatus: 'APPROVED',
    marketingSource: 'affiliate',
    onboardingStatus: 'Email Verification 17%',
    status: 'Inactive',
    plan: 'Addicted'
  },
  {
    id: 3,
    name: 'Bradley Greer',
    mobile: '(123) 4567 890',
    date: '2023/01/22',
    time: '10:32 AM',
    salary: 82000,
    loans: 'L26040007327',
    executiveName: 'Laxmi',
    executiveEmail: 'laxmi@crednidhi.com',
    supervisorName: 'Sippu',
    supervisorEmail: 'sippu.singh@crednidhi.com',
    reloanStatus: 'REJECTED',
    marketingSource: 'app.crednidhi.com',
    onboardingStatus: 'Submit Application 100%',
    status: 'Active',
    plan: 'Diehard'
  },
  {
    id: 4,
    name: 'Brielle Williamson',
    mobile: '(123) 4567 890',
    date: '2023/02/07',
    time: '09:05 PM',
    salary: null,
    loans: 'No loans',
    executiveName: 'Neha',
    executiveEmail: 'neha@crednidhi.com',
    supervisorName: 'Radha',
    supervisorEmail: 'radha@crednidhi.com',
    reloanStatus: 'PENDING',
    marketingSource: 'organic',
    onboardingStatus: 'Employment Details 40%',
    status: 'Active',
    plan: 'Casual'
  }
];

const planColor = {
  Casual: 'success',
  Addicted: 'primary',
  Diehard: 'warning'
};

const executiveOptions = [
  { id: 'not-assigned', name: 'Not Assigned', email: '' },
  { id: 'anamika', name: 'Anamika', email: 'anamika.bora@crednidhi.com' },
  { id: 'radha', name: 'Radha', email: 'radha@crednidhi.com' },
  { id: 'suman', name: 'suman', email: 'suman@crednidhi.com' },
  { id: 'sippu', name: 'Sippu', email: 'sippu.singh@crednidhi.com' },
  { id: 'abhay', name: 'Abhay', email: 'abhay@crednidhi.com' },
  { id: 'laxmi', name: 'Laxmi', email: 'laxmi@crednidhi.com' },
  { id: 'neha', name: 'Neha', email: 'neha@crednidhi.com' }
];

const supervisorOptions = [
  { id: 'not-assigned', name: 'Not Assigned', email: '' },
  { id: 'radha', name: 'Radha', email: 'radha@crednidhi.com' },
  { id: 'suman', name: 'Suman', email: 'suman@crednidhi.com' },
  { id: 'sippu', name: 'Sippu', email: 'sippu.singh@crednidhi.com' },
  { id: 'manoj', name: 'Manoj', email: 'manoj@crednidhi.com' }
];

export default function CustomerPage() {
  const [search, setSearch] = useState('');
  const [perPage, setPerPage] = useState('10');
  const [headerSearch, setHeaderSearch] = useState('');
  const [statusTab, setStatusTab] = useState('pending');
  const [executiveAnchor, setExecutiveAnchor] = useState(null);
  const [selectedExecutives, setSelectedExecutives] = useState([]);
  const [supervisorAnchor, setSupervisorAnchor] = useState(null);
  const [selectedSupervisors, setSelectedSupervisors] = useState([]);
  const [loanAnchor, setLoanAnchor] = useState(null);
  const [selectedLoanFilter, setSelectedLoanFilter] = useState('all');
  const [reloanAnchor, setReloanAnchor] = useState(null);
  const [selectedReloanFilter, setSelectedReloanFilter] = useState('all');
  const [salaryAnchor, setSalaryAnchor] = useState(null);
  const [salaryMin, setSalaryMin] = useState('0');
  const [salaryMax, setSalaryMax] = useState('');
  const [salaryQuick, setSalaryQuick] = useState('');
  const [statusAnchor, setStatusAnchor] = useState(null);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('');
  const [filtersAnchor, setFiltersAnchor] = useState(null);
  const [quickDateFilter, setQuickDateFilter] = useState('all-time');
  const [selectedKycFilters, setSelectedKycFilters] = useState([]);
  const [selectedReloanChecks, setSelectedReloanChecks] = useState([]);

  const filteredRows = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    const bySearch = normalized ? rows.filter((row) => row.name.toLowerCase().includes(normalized)) : rows;
    const byExecutive =
      selectedExecutives.length === 0 ? bySearch : bySearch.filter((row) => selectedExecutives.includes(row.executiveName.toLowerCase()));
    const bySupervisor =
      selectedSupervisors.length === 0
        ? byExecutive
        : byExecutive.filter((row) => selectedSupervisors.includes((row.supervisorName || '').toLowerCase()));
    const byLoans =
      selectedLoanFilter === 'with-loans'
        ? bySupervisor.filter((row) => row.loans.toLowerCase() !== 'no loans')
        : selectedLoanFilter === 'without-loans'
          ? bySupervisor.filter((row) => row.loans.toLowerCase() === 'no loans')
          : bySupervisor;
    const byReloan =
      selectedReloanFilter === 'all' ? byLoans : byLoans.filter((row) => row.reloanStatus === selectedReloanFilter);
    const min = Number(salaryMin || 0);
    const max = salaryMax === '' ? Infinity : Number(salaryMax);
    const bySalaryRange = byReloan.filter((row) => {
      if (salaryQuick === 'no-salary') return row.salary === null;
      if (row.salary === null) return false;
      return row.salary >= min && row.salary <= max;
    });
    const byStatus =
      selectedStatusFilter === ''
        ? bySalaryRange
        : bySalaryRange.filter((row) => row.onboardingStatus.toLowerCase().startsWith(selectedStatusFilter.toLowerCase()));
    return byStatus;
  }, [
    search,
    selectedExecutives,
    selectedSupervisors,
    selectedLoanFilter,
    selectedReloanFilter,
    salaryMin,
    salaryMax,
    salaryQuick,
    selectedStatusFilter
  ]);

  const handleExecutiveToggle = (name) => {
    const normalizedName = name.toLowerCase();
    setSelectedExecutives((prev) =>
      prev.includes(normalizedName) ? prev.filter((item) => item !== normalizedName) : [...prev, normalizedName]
    );
  };

  const handleSupervisorToggle = (name) => {
    const normalizedName = name.toLowerCase();
    setSelectedSupervisors((prev) =>
      prev.includes(normalizedName) ? prev.filter((item) => item !== normalizedName) : [...prev, normalizedName]
    );
  };

  const toggleCheckValue = (value, setter) => {
    setter((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <MainCard title="Customer List">
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
          <Typography variant="h4">
            Customers(866)
          </Typography>
          <TextField
            size="small"
            placeholder="Search by Name,ID,Email or Phone"
            value={headerSearch}
            onChange={(event) => setHeaderSearch(event.target.value)}
            sx={{ width: { xs: '100%', md: 340 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 size="16" color="currentColor" />
                </InputAdornment>
              )
            }}
          />
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1.5}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Button
              variant={filtersAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setFiltersAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Filters</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {filtersAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={filtersAnchor}
              open={Boolean(filtersAnchor)}
              onClose={() => setFiltersAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 260, p: 2 } } }}
            >
              <Stack spacing={2}>
                <Typography variant="h6">Reset Filters</Typography>
                <Button
                  variant="text"
                  onClick={() => {
                    setQuickDateFilter('all-time');
                    setSelectedKycFilters([]);
                    setSelectedReloanChecks([]);
                  }}
                  sx={{ alignSelf: 'flex-start', p: 0, minWidth: 'auto' }}
                >
                  Clear Filters
                </Button>
                <Divider />

                <Stack spacing={1}>
                  <Typography variant="h6">Quick Date Filter</Typography>
                  {[
                    ['all-time', 'All Time'],
                    ['today', 'Today'],
                    ['yesterday', 'Yesterday'],
                    ['last-7-days', 'Last 7 Days'],
                    ['last-30-days', 'Last 30 Days'],
                    ['last-90-days', 'Last 90 Days']
                  ].map(([value, label]) => (
                    <FormControlLabel
                      key={value}
                      control={<Radio checked={quickDateFilter === value} onChange={() => setQuickDateFilter(value)} size="small" />}
                      label={<Typography variant="body1">{label}</Typography>}
                    />
                  ))}
                </Stack>

                <Stack spacing={1}>
                  <Typography variant="h6">KYC Status</Typography>
                  {[
                    ['kyc-pending', 'Kycpending'],
                    ['kyc-completed', 'Kyccompleted']
                  ].map(([value, label]) => (
                    <FormControlLabel
                      key={value}
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedKycFilters.includes(value)}
                          onChange={() => toggleCheckValue(value, setSelectedKycFilters)}
                        />
                      }
                      label={<Typography variant="body1">{label}</Typography>}
                    />
                  ))}
                </Stack>

                <Stack spacing={1}>
                  <Typography variant="h6">Reloan Status</Typography>
                  {[
                    ['pending', 'Pending'],
                    ['approved', 'Approved'],
                    ['rejected', 'Rejected']
                  ].map(([value, label]) => (
                    <FormControlLabel
                      key={value}
                      control={
                        <Checkbox
                          size="small"
                          checked={selectedReloanChecks.includes(value)}
                          onChange={() => toggleCheckValue(value, setSelectedReloanChecks)}
                        />
                      }
                      label={<Typography variant="body1">{label}</Typography>}
                    />
                  ))}
                </Stack>
              </Stack>
            </Menu>
            <Button
              variant={executiveAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setExecutiveAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Executive</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {executiveAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={executiveAnchor}
              open={Boolean(executiveAnchor)}
              onClose={() => setExecutiveAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 310, maxHeight: 420 } } }}
            >
              <Typography variant="subtitle2" sx={{ px: 2, py: 1.25 }}>
                Filter by Executive
              </Typography>
              <Divider />
              {executiveOptions.map((option) => (
                <MenuItem key={option.id} onClick={() => handleExecutiveToggle(option.name)} sx={{ py: 1 }}>
                  <Checkbox size="small" checked={selectedExecutives.includes(option.name.toLowerCase())} />
                  <Avatar sx={{ width: 28, height: 28, mr: 1.25, fontSize: 12 }}>{option.name.charAt(0)}</Avatar>
                  <Stack spacing={0} minWidth={0}>
                    <Typography variant="body2">{option.name}</Typography>
                    {option.email ? (
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {option.email}
                      </Typography>
                    ) : null}
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
            <Button
              variant={supervisorAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setSupervisorAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Supervisor</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {supervisorAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={supervisorAnchor}
              open={Boolean(supervisorAnchor)}
              onClose={() => setSupervisorAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 310, maxHeight: 420 } } }}
            >
              <Typography variant="subtitle2" sx={{ px: 2, py: 1.25 }}>
                Filter by Supervisor
              </Typography>
              <Divider />
              {supervisorOptions.map((option) => (
                <MenuItem key={option.id} onClick={() => handleSupervisorToggle(option.name)} sx={{ py: 1 }}>
                  <Checkbox size="small" checked={selectedSupervisors.includes(option.name.toLowerCase())} />
                  <Avatar sx={{ width: 28, height: 28, mr: 1.25, fontSize: 12 }}>{option.name.charAt(0)}</Avatar>
                  <Stack spacing={0} minWidth={0}>
                    <Typography variant="body2">{option.name}</Typography>
                    {option.email ? (
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {option.email}
                      </Typography>
                    ) : null}
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
            <Button
              variant={loanAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setLoanAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Loans</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {loanAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={loanAnchor}
              open={Boolean(loanAnchor)}
              onClose={() => setLoanAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 280 } } }}
            >
              <Typography variant="subtitle2" sx={{ px: 2, py: 1.25 }}>
                Filter by Loan Status
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  setSelectedLoanFilter('with-loans');
                  setLoanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
                  <Typography variant="body2" fontWeight={selectedLoanFilter === 'with-loans' ? 600 : 400}>
                    Customers With Loans
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedLoanFilter('without-loans');
                  setLoanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                  <Typography variant="body2" fontWeight={selectedLoanFilter === 'without-loans' ? 600 : 400}>
                    Customers Without Loans
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
            <Button
              variant={reloanAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setReloanAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Reloan Status</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {reloanAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={reloanAnchor}
              open={Boolean(reloanAnchor)}
              onClose={() => setReloanAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 210 } } }}
            >
              <MenuItem
                onClick={() => {
                  setSelectedReloanFilter('all');
                  setReloanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Typography variant="body2" fontWeight={selectedReloanFilter === 'all' ? 600 : 400}>
                  All Reloan Status
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  setSelectedReloanFilter('PENDING');
                  setReloanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'warning.main' }} />
                  <Typography variant="body2" fontWeight={selectedReloanFilter === 'PENDING' ? 600 : 400}>
                    PENDING
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedReloanFilter('APPROVED');
                  setReloanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
                  <Typography variant="body2" fontWeight={selectedReloanFilter === 'APPROVED' ? 600 : 400}>
                    APPROVED
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedReloanFilter('REJECTED');
                  setReloanAnchor(null);
                }}
                sx={{ py: 1.25 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main' }} />
                  <Typography variant="body2" fontWeight={selectedReloanFilter === 'REJECTED' ? 600 : 400}>
                    REJECTED
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
            <Button
              variant={salaryAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setSalaryAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Salary</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {salaryAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={salaryAnchor}
              open={Boolean(salaryAnchor)}
              onClose={() => setSalaryAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 360, p: 2 } } }}
            >
              <Stack spacing={1.5}>
                <Typography variant="subtitle2">Filter by Salary Range</Typography>
                <Stack spacing={0.5}>
                  <Typography variant="body2">Minimum Salary (₹)</Typography>
                  <TextField
                    size="small"
                    value={salaryMin}
                    onChange={(event) => {
                      setSalaryQuick('');
                      setSalaryMin(event.target.value.replace(/[^0-9]/g, ''));
                    }}
                    placeholder="0"
                    InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
                  />
                </Stack>
                <Stack spacing={0.5}>
                  <Typography variant="body2">Maximum Salary (₹)</Typography>
                  <TextField
                    size="small"
                    value={salaryMax}
                    onChange={(event) => {
                      setSalaryQuick('');
                      setSalaryMax(event.target.value.replace(/[^0-9]/g, ''));
                    }}
                    placeholder="No limit"
                    InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Quick filters:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip
                    label="0 - 25k"
                    size="small"
                    color={salaryQuick === '0-25k' ? 'primary' : 'default'}
                    onClick={() => {
                      setSalaryQuick('0-25k');
                      setSalaryMin('0');
                      setSalaryMax('25000');
                    }}
                  />
                  <Chip
                    label="25k - 50k"
                    size="small"
                    color={salaryQuick === '25k-50k' ? 'primary' : 'default'}
                    onClick={() => {
                      setSalaryQuick('25k-50k');
                      setSalaryMin('25000');
                      setSalaryMax('50000');
                    }}
                  />
                  <Chip
                    label="50k+"
                    size="small"
                    color={salaryQuick === '50k+' ? 'primary' : 'default'}
                    onClick={() => {
                      setSalaryQuick('50k+');
                      setSalaryMin('50000');
                      setSalaryMax('');
                    }}
                  />
                  <Chip
                    label="No Salary"
                    size="small"
                    color={salaryQuick === 'no-salary' ? 'primary' : 'default'}
                    onClick={() => setSalaryQuick('no-salary')}
                  />
                </Stack>
              </Stack>
            </Menu>
            <Button
              variant={statusAnchor ? 'contained' : 'outlined'}
              size="small"
              onClick={(event) => setStatusAnchor(event.currentTarget)}
              sx={{ color: '#000', '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: '#000' } }}
            >
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="inherit">Status</Typography>
                <Typography variant="inherit" sx={{ color: '#000', fontWeight: 700, lineHeight: 1 }}>
                  {statusAnchor ? '▴' : '▾'}
                </Typography>
              </Stack>
            </Button>
            <Menu
              anchorEl={statusAnchor}
              open={Boolean(statusAnchor)}
              onClose={() => setStatusAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, width: 240 } } }}
            >
              <Typography variant="subtitle2" sx={{ px: 2, py: 1.25 }}>
                Filter by Status
              </Typography>
              <Divider />
              {[
                { icon: '📱', label: 'Phone Verification' },
                { icon: '✉', label: 'Email Verification' },
                { icon: '👤', label: 'Personal Information' },
                { icon: '🏦', label: 'Bank Details' },
                { icon: '💼', label: 'Employment Details' },
                { icon: '📷', label: 'Selfie Verification' },
                { icon: '🏠', label: 'Address Verification' },
                { icon: '➤', label: 'Submit Application' }
              ].map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={() => {
                    setSelectedStatusFilter(option.label);
                    setStatusAnchor(null);
                  }}
                  sx={{ py: 1 }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                      {option.icon}
                    </Typography>
                    <Typography variant="body2" fontWeight={selectedStatusFilter === option.label ? 600 : 400}>
                      {option.label}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="warning" size="small">
              User Reallocation
            </Button>
            <Button variant="outlined" size="small">
              View
            </Button>
          </Stack>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={1}>
          <Tabs
            value={statusTab}
            onChange={(_, newValue) => setStatusTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ minHeight: 38, '& .MuiTab-root': { minHeight: 38, textTransform: 'none' } }}
          >
            <Tab label="Pending" value="pending" />
            <Tab label="Hold" value="hold" />
            <Tab label="Dormant" value="dormant" />
            <Tab label="Active" value="active" />
            <Tab label="Rejected" value="rejected" />
            <Tab label="All" value="all" />
          </Tabs>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Clear
            </Typography>
            <Typography variant="body2" color="text.secondary">
              10 of 866 customers
            </Typography>
          </Stack>
        </Stack>
        <Divider />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField select size="small" value={perPage} onChange={(event) => setPerPage(event.target.value)} sx={{ width: 90 }}>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </TextField>
          <Typography variant="body2" color="text.secondary">
            entries per page
          </Typography>
        </Stack>

        <TextField
          size="small"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          sx={{ width: { xs: '100%', sm: 220 } }}
        />
      </Stack>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>MOBILE</TableCell>
              <TableCell>START DATE</TableCell>
              <TableCell>LOANS</TableCell>
              <TableCell>USER ASSIGNED EXECUTIVE</TableCell>
              <TableCell>MARKETING SOURCE</TableCell>
              <TableCell>ONBOARDING STATUS</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>PLAN</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ width: 34, height: 34 }}>{row.name.charAt(0)}</Avatar>
                    <Typography variant="subtitle2">{row.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>
                  <Typography variant="body2">{row.date}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {row.time}
                  </Typography>
                </TableCell>
                <TableCell>{row.loans}</TableCell>
                <TableCell>
                  <Typography variant="body2">{row.executiveName}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {row.executiveEmail}
                  </Typography>
                </TableCell>
                <TableCell>{row.marketingSource}</TableCell>
                <TableCell>
                  <Typography variant="body2">{row.onboardingStatus}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Pending
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: row.status === 'Active' ? 'success.main' : 'text.disabled' }} />
                    <Typography variant="body2" color={row.status === 'Active' ? 'success.main' : 'text.secondary'}>
                      {row.status}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip size="small" label={row.plan} color={planColor[row.plan]} variant="filled" />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1.25} alignItems="center" color="text.secondary">
                    <IconButton component={RouterLink} to={`/customer/view/${row.id}`} size="small" color="inherit">
                      <Eye size="16" color="currentColor" />
                    </IconButton>
                    <Edit2 size="16" color="currentColor" />
                    <Trash size="16" color="currentColor" />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
