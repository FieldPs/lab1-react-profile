import { Skeleton } from '@mui/material';

function ProfileCardSkeleton({ darkMode }) {
    return (
        <div className={`profile-card skeleton-card ${darkMode ? 'dark' : ''}`}>
            <div className="profile-header">
                <div className="profile-info" style={{ flex: 1 }}>
                    <Skeleton 
                        variant="text" 
                        width="60%" 
                        height={32}
                        sx={{ bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.11)' }}
                    />
                    <Skeleton 
                        variant="text" 
                        width="40%" 
                        height={24}
                        sx={{ bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.11)' }}
                    />
                </div>
            </div>
            
            <Skeleton 
                variant="text" 
                width="100%" 
                height={20}
                sx={{ bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.11)', marginTop: '16px' }}
            />
            <Skeleton 
                variant="text" 
                width="90%" 
                height={20}
                sx={{ bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.11)' }}
            />

            <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={40}
                sx={{ 
                    bgcolor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.11)',
                    borderRadius: '8px',
                    marginTop: '16px'
                }}
            />
        </div>
    );
}

export default ProfileCardSkeleton;