'use client';

// Minimal fallback for root 404s
export default function NotFound() {
    return (
        <html>
            <body>
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif'
                }}>
                    <h1>404 - Page Not Found</h1>
                    <p>The requested page does not exist.</p>
                </div>
            </body>
        </html>
    );
}
