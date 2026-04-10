import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';

const detailTabs = [
  'Personal Details',
  'Central Dedupe',
  'Bank Accounts',
  'Employment',
  'Documents',
  'Credit Report',
  'Loan Applications',
  'Customer Call Logs',
  'Audit Logs',
  'Dedupe Master'
];

export default function CustomerViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [addressTab, setAddressTab] = useState('all');

  return (
    <Stack spacing={2}>
      <Box>
        <Button variant="outlined" size="small" onClick={() => navigate(-1)}>
          {'< Back'}
        </Button>
      </Box>

      <MainCard content={false}>
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ px: 2, pt: 1, '& .MuiTab-root': { textTransform: 'none', fontWeight: 600 } }}
        >
          {detailTabs.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        <Divider />

        <Box sx={{ p: 2.5 }}>
          {activeTab === 2 ? (
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Box>
                  <Typography variant="h4">Bank Accounts</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage customer bank accounts
                  </Typography>
                </Box>
                <Button variant="contained" color="warning">
                  + Add an Account
                </Button>
              </Stack>

              <MainCard sx={{ border: '1px solid', borderColor: 'warning.light' }}>
                <Stack spacing={1.25}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">Esaf Small Finance Bank</Typography>
                    <Typography variant="caption" color="primary.main">
                      Primary
                    </Typography>
                    <Typography variant="caption" color="success.main">
                      VERIFIED
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Rashid Majeed Rashid - 53200000539371
                  </Typography>

                  <Box
                    sx={{
                      p: 1.25,
                      borderRadius: 1,
                      bgcolor: 'success.lighter',
                      border: '1px solid',
                      borderColor: 'success.light'
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="success.dark">
                        Verified Beneficiary &nbsp; <strong>Rashid M</strong>
                      </Typography>
                      <Typography variant="body2" color="success.dark">
                        Name Match 85%
                      </Typography>
                    </Stack>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="caption" color="text.secondary">
                        ACCOUNT NUMBER
                      </Typography>
                      <Typography variant="subtitle2">53200000539371</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="caption" color="text.secondary">
                        IFSC CODE
                      </Typography>
                      <Typography variant="subtitle2">ESMF0001163</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="caption" color="text.secondary">
                        ACCOUNT TYPE
                      </Typography>
                      <Typography variant="subtitle2">SAVINGS</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography variant="caption" color="text.secondary">
                        BANK ADDRESS
                      </Typography>
                      <Typography variant="subtitle2">
                        GROUND FLOOR,70 1,71,68 ZAIAIA3 AND 68 2 B,SQUARE MALL,MYSORE ROAD,MANANTHAVADY,WAYANAD DIST PIN 670645
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="caption" color="text.secondary">
                        ACCOUNT HOLDER
                      </Typography>
                      <Typography variant="subtitle2">Rashid Majeed Rashid</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="caption" color="text.secondary">
                        CREATED ON
                      </Typography>
                      <Typography variant="subtitle2">08 Apr 2026</Typography>
                    </Grid>
                  </Grid>

                  <Divider />
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button size="small" variant="text" color="secondary">
                      Upload Account Statement
                    </Button>
                    <Button size="small" variant="text">
                      Edit
                    </Button>
                  </Stack>
                </Stack>
              </MainCard>

              <MainCard content={false}>
                <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6">Account Aggregator</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Financial data consents and access management
                  </Typography>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1.5}>
                    <Stack direction="row" spacing={1}>
                      <Button size="small" variant="text" color="warning">
                        Consents (1)
                      </Button>
                      <Button size="small" variant="text" color="inherit">
                        Data
                      </Button>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      mt: 1.5,
                      mb: 1.5,
                      p: 1,
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'warning.light',
                      bgcolor: 'warning.lighter'
                    }}
                  >
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <Typography variant="body2" color="warning.dark" sx={{ mr: 'auto', alignSelf: 'center' }}>
                        1 pending consent request
                      </Typography>
                      <Button size="small" variant="contained" color="warning">
                        Remind
                      </Button>
                      <Button size="small" variant="contained">
                        Copy URL
                      </Button>
                      <Button size="small" variant="outlined">
                        Manual
                      </Button>
                    </Stack>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        STATUS
                      </Typography>
                      <Typography variant="subtitle2" color="primary.main">
                        Pending
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        HANDLE ID
                      </Typography>
                      <Typography variant="subtitle2">9778213303@CAMSAA</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        MOBILE
                      </Typography>
                      <Typography variant="subtitle2">9778213303</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        RETRY
                      </Typography>
                      <Typography variant="subtitle2">-</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        CREATED
                      </Typography>
                      <Typography variant="subtitle2">Apr 8, 2026 8:29 PM</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Typography variant="caption" color="text.secondary">
                        UPDATED
                      </Typography>
                      <Typography variant="subtitle2">Apr 8, 2026 8:29 PM</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary">
                        ACTIONS
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                        <Button size="small" variant="outlined">
                          View
                        </Button>
                        <Button size="small" variant="contained" color="inherit">
                          Redirect AA URL
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </MainCard>
            </Stack>
          ) : (
            <>
              <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle2" color="text.secondary">
                Profile ID
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                CREDNIDHI00139{id || '44'} | ID: #219C315E
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Full Name
                  </Typography>
                  <Typography variant="subtitle2">Dheeraj Kumar</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Gender
                  </Typography>
                  <Typography variant="subtitle2">MALE</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Religion
                  </Typography>
                  <Typography variant="subtitle2">HINDUISM</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Salary
                  </Typography>
                  <Typography variant="subtitle2">Rs 46,000</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    User Email
                  </Typography>
                  <Typography variant="subtitle2">dheerajkumar9946@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Device Type
                  </Typography>
                  <Typography variant="subtitle2">Mobile - android</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="text.secondary">
                User Status
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Pending (Click to View/Edit)
              </Typography>
              <Typography variant="caption" color="primary.main">
                New User
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 1 }}>
            Phone Numbers
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <MainCard>
                <Typography variant="subtitle2">+918887783688</Typography>
                <Typography variant="caption" color="text.secondary">
                  Primary - Verified
                </Typography>
                <Button fullWidth size="small" variant="outlined" sx={{ mt: 1.5 }}>
                  Check Phone Age
                </Button>
              </MainCard>
            </Grid>
            <Grid item xs={12} md={8}>
              <MainCard>
                <Stack spacing={1} alignItems="center" justifyContent="center" sx={{ py: 4 }}>
                  <Typography variant="subtitle2">No alternate phone numbers</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add emergency contacts for faster verification
                  </Typography>
                  <Button size="small" variant="outlined">
                    + Add Phone Number
                  </Button>
                </Stack>
              </MainCard>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 1 }}>
            Customer Addresses
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            Manage all address information
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
            {[
              ['all', 'All 2'],
              ['documents', 'Documents'],
              ['credit-reports', 'Credit Reports'],
              ['alternate', 'Alternate 1'],
              ['location', 'Location 1'],
              ['driving-license', 'Driving License'],
              ['ecom-address', 'Ecom Address'],
              ['address', 'Address'],
              ['lpg-address', 'LPG Address'],
              ['ip-address', 'IP Address']
            ].map(([value, label]) => (
              <Button
                key={value}
                variant={addressTab === value ? 'contained' : 'outlined'}
                size="small"
                color={addressTab === value ? 'warning' : 'inherit'}
                onClick={() => setAddressTab(value)}
              >
                {label}
              </Button>
            ))}
          </Stack>

          <MainCard>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              PAN Address
            </Typography>
            <Typography variant="body2">
              BUILDING, ROAD, Deogaon B.O, Badhara, Uttar Pradesh, 274202, India
            </Typography>
          </MainCard>

              <Box sx={{ mt: 1.5 }}>
            <MainCard>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="subtitle2">ALTERNATE</Typography>
                <Typography variant="caption" color="text.secondary">
                  1
                </Typography>
              </Stack>
              <Typography variant="caption" color="warning.main" sx={{ display: 'inline-block', mb: 1 }}>
                PAN_DETAILS
              </Typography>
              <Typography variant="body2">
                BUILDING, ROAD, Deogaon B.O, Badhara, Uttar Pradesh, 274202, India
              </Typography>
            </MainCard>
          </Box>

          <Box sx={{ mt: 1.5 }}>
            <MainCard>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="subtitle2">GEO LOCATION</Typography>
                <Typography variant="caption" color="text.secondary">
                  1
                </Typography>
              </Stack>
              <Typography variant="caption" color="warning.main" sx={{ display: 'inline-block', mb: 1 }}>
                Geo Location
              </Typography>
              <Typography variant="body2">
                33, Sirsiya Rd, devpura, Bishunapur, Uttar Pradesh 271201, India
              </Typography>
            </MainCard>
          </Box>

          <Box sx={{ mt: 1.5 }}>
            <Typography variant="body2" color="warning.main" sx={{ mb: 1 }}>
              GEO CODING: User has completed onboarding step LoanApplicationEmploymentInfo
            </Typography>
            <MainCard>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="subtitle2">MOBILE VERIFICATION</Typography>
                <Button size="small" variant="outlined">
                  Fetch Mobile Verification Data
                </Button>
              </Stack>
              <Stack spacing={1} alignItems="center" justifyContent="center" sx={{ py: 5 }}>
                <Typography variant="subtitle2">No mobile verification data available</Typography>
                <Typography variant="body2" color="text.secondary">
                  Click the button above to fetch mobile verification data
                </Typography>
                <Button size="small" variant="outlined">
                  Fetch Mobile Verification Data
                </Button>
              </Stack>
            </MainCard>
              </Box>
            </>
          )}
        </Box>
      </MainCard>
    </Stack>
  );
}
