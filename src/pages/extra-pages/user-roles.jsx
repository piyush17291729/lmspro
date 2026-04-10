import { useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
import InputAdornment from '@mui/material/InputAdornment';

// assets
import { SearchNormal1, Edit2, Trash, Eye, Code, DocumentText, Call, Add } from 'iconsax-reactjs';

// project-imports
import MainCard from 'components/MainCard';

// mock data
const rows = [
  {
    id: '#F65127BF',
    name: 'Dipesh',
    email: 'dipesh@salaryadda.com',
    phone: 'No phone number',
    status: 'Active',
    avatar: 'D',
    rolesCount: 1,
    permsCount: 4,
    roles: [{ name: 'CREDIT_EXECUTIVE', id: 17 }],
    permissions: ['CREDIT_EXECUTIVE', 'ONBOARDING_COMPLETED', 'REPEAT_LOANS'],
    extraPerms: 1,
    supervisor: { name: 'Pooja', email: 'pooja.singh@crednidhi.com' },
    details: { roles: 1, perms: 0 },
    created: 'April 9, 2026 11:56 AM',
  },
  {
    id: '#F91D7C3B',
    name: 'Khushi',
    email: 'khushi@fintechcloud.in',
    phone: 'No phone number',
    status: 'Active',
    avatar: 'K',
    rolesCount: 1,
    permsCount: 28,
    roles: [{ name: 'OTHER', id: 1 }],
    permissions: ['REPORTS', 'COMPLETED_LOAN_WITH_NO_REPET_REPORT', 'ACTIVE_LOANS_BY_DUE_DATE_REPORT'],
    extraPerms: 25,
    supervisor: { name: 'No supervisor', email: '' },
    details: { roles: 1, perms: 0 },
    created: 'April 8, 2026 9:15 PM',
  },
  {
    id: '#E490FA6E',
    name: 'zafar',
    email: 'zafar@crednidhi.com',
    phone: 'No phone number',
    status: 'Active',
    avatar: 'Z',
    rolesCount: 2,
    permsCount: 4,
    roles: [
      { name: 'OTHER', id: 1 },
      { name: 'CREDIT_EXECUTIVE', id: 17 }
    ],
    permissions: [],
    extraPerms: 0,
    supervisor: { name: 'Pooja', email: 'pooja.singh@crednidhi.com' },
    details: { roles: 2, perms: 0 },
    created: 'April 8, 2026 5:05 PM',
  }
];

// ==============================|| USER ROLES PAGE ||============================== //

export default function UserRolesPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <MainCard content={false}>
      {/* Top Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="user tabs">
          <Tab 
            label="Partner Users" 
            sx={{ fontWeight: tabValue === 0 ? 600 : 400, textTransform: 'none', px: 3, py: 2 }} 
          />
          <Tab 
            label="Dialer Configurations" 
            sx={{ fontWeight: tabValue === 1 ? 600 : 400, textTransform: 'none', px: 3, py: 2 }} 
          />
        </Tabs>
      </Box>

      {/* Toolbar */}
      <Box sx={{ p: 3, pb: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <Typography variant="h4" sx={{ mb: { xs: 2, md: 0 } }}>
            Users<Typography component="span" variant="h4" color="textSecondary">(103)</Typography>
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap sx={{ gap: 2 }}>
            <Select size="small" defaultValue="All Roles" sx={{ minWidth: 160 }}>
              <MenuItem value="All Roles">All Roles</MenuItem>
            </Select>
            <Select size="small" defaultValue="All Permissions" sx={{ minWidth: 160 }}>
              <MenuItem value="All Permissions">All Permissions</MenuItem>
            </Select>
            <Select size="small" defaultValue="All Status" sx={{ minWidth: 160 }}>
              <MenuItem value="All Status">All Status</MenuItem>
            </Select>
            <TextField
              size="small"
              placeholder="Search by Name, ID, Em"
              sx={{ minWidth: 220 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchNormal1 size="16" color="currentColor" />
                  </InputAdornment>
                )
              }}
            />
          </Stack>
        </Stack>

        <Stack direction="row" sx={{ mt: 3, mb: 1 }}>
          <Button 
            variant="contained" 
            color="warning" 
            startIcon={<Add size="18" />} 
            sx={{ borderRadius: 8, px: 3 }}
          >
            Create User
          </Button>
        </Stack>
      </Box>

      {/* Table */}
      <TableContainer sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 250 }}>User Details</TableCell>
              <TableCell sx={{ minWidth: 300 }}>Roles & Permissions</TableCell>
              <TableCell>Reports To</TableCell>
              <TableCell>Status & Details</TableCell>
              <TableCell>Created</TableCell>
              <TableCell align="center" sx={{ minWidth: 160 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {/* User Details */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: 'secondary.dark', color: '#fff', mt: 0.5 }}>{row.avatar}</Avatar>
                    <Stack spacing={0.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" fontWeight={600}>{row.name}</Typography>
                        <Chip label={row.status} color="success" size="small" sx={{ height: 20, fontSize: '0.7rem' }} />
                      </Stack>
                      <Typography variant="caption" color="text.secondary">ID: {row.id}</Typography>
                      <Typography variant="body2" color="text.secondary">{row.email}</Typography>
                      <Typography variant="caption" color="text.secondary" fontStyle="italic">{row.phone}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Roles: {row.rolesCount} | Perms: {row.permsCount}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>

                {/* Roles & Permissions */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  <Stack spacing={1.5}>
                    {row.roles.map((role, idx) => (
                      <Box key={idx} sx={{ p: 1, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip 
                            label={role.name} 
                            color="warning" 
                            size="small" 
                            sx={{ borderRadius: 1, fontWeight: 600, color: 'warning.dark', bgcolor: 'warning.lighter' }} 
                            variant="outlined" 
                          />
                          <Typography variant="caption" color="text.secondary">ID: {role.id}</Typography>
                        </Stack>
                      </Box>
                    ))}
                    
                    <Box sx={{ p: 1.5, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'secondary.lighter' }}>
                      <Typography variant="caption" fontWeight={600} display="block" mb={1}>
                        Direct Permissions ({row.permsCount}):
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {row.permissions.map((perm, idx) => (
                          <Chip key={idx} label={perm} size="small" sx={{ bgcolor: 'primary.lighter', color: 'primary.dark', borderRadius: 1 }} />
                        ))}
                        {row.extraPerms > 0 && (
                          <Chip label={`+${row.extraPerms} more`} size="small" sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 1 }} />
                        )}
                      </Stack>
                    </Box>
                  </Stack>
                </TableCell>

                {/* Reports To */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  {row.supervisor.name !== 'No supervisor' ? (
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2" fontWeight={600}>{row.supervisor.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{row.supervisor.email}</Typography>
                    </Stack>
                  ) : (
                    <Typography variant="caption" color="text.secondary" fontStyle="italic">
                      No supervisor
                    </Typography>
                  )}
                </TableCell>

                {/* Status & Details */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle2" fontWeight={600}>Status:</Typography>
                      <Chip label={row.status} color="success" size="small" sx={{ height: 20, fontSize: '0.7rem' }} />
                    </Stack>
                    <Typography variant="caption" color="text.secondary">Roles: {row.details.roles}</Typography>
                    <Typography variant="caption" color="text.secondary">Permissions: {row.details.perms}</Typography>
                  </Stack>
                </TableCell>

                {/* Created */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  <Typography variant="body2">{row.created}</Typography>
                </TableCell>

                {/* Actions */}
                <TableCell sx={{ verticalAlign: 'top' }}>
                  <Stack spacing={1}>
                    <Button variant="contained" color="warning" size="small" startIcon={<Eye size="16" />} sx={{ borderRadius: 8, justifyContent: 'flex-start' }}>
                      View
                    </Button>
                    <Button variant="outlined" color="success" size="small" startIcon={<Code size="16" />} sx={{ borderRadius: 8, justifyContent: 'flex-start' }}>
                      Gen. Code
                    </Button>
                    <Button variant="outlined" color="primary" size="small" startIcon={<DocumentText size="16" />} sx={{ borderRadius: 8, justifyContent: 'flex-start' }}>
                      Audit Logs
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" startIcon={<Call size="16" />} sx={{ borderRadius: 8, justifyContent: 'flex-start' }}>
                      Dialer Config
                    </Button>
                    <Stack direction="row" spacing={1} justifyContent="center" mt={1}>
                      <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider' }}>
                        <Edit2 size="16" color="currentColor" />
                      </IconButton>
                      <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider' }}>
                        <Trash size="16" color="currentColor" />
                      </IconButton>
                    </Stack>
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
