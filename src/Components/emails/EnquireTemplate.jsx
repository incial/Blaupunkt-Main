import React from 'react';

const EnquireTemplate = ({ name, email, phone, message }) => {
    const styles = {
        container: {
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
        },
        header: {
            backgroundColor: '#199BD3', // Blaupunkt Primary Blue
            padding: '30px 20px',
            textAlign: 'center',
        },
        headerTitle: {
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: '600',
            margin: 0,
        },
        content: {
            padding: '30px 20px',
            color: '#18161A', // Blaupunkt Dark
        },
        greeting: {
            fontSize: '18px',
            marginBottom: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
        },
        th: {
            textAlign: 'left',
            padding: '12px 8px',
            borderBottom: '1px solid #e0e0e0',
            color: '#909294', // Blaupunkt Gray
            fontSize: '14px',
            width: '30%',
        },
        td: {
            textAlign: 'left',
            padding: '12px 8px',
            borderBottom: '1px solid #e0e0e0',
            fontSize: '16px',
            fontWeight: '500',
        },
        messageLabel: {
            color: '#909294',
            fontSize: '14px',
            marginBottom: '8px',
            display: 'block',
        },
        messageContent: {
            backgroundColor: '#f9fafb',
            padding: '15px',
            borderRadius: '6px',
            fontSize: '16px',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
        },
        footer: {
            backgroundColor: '#f9fafb',
            padding: '20px',
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0',
        },
        footerText: {
            color: '#909294',
            fontSize: '12px',
            margin: 0,
        },
        link: {
            color: '#199BD3',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.headerTitle}>New Website Inquiry</h1>
            </div>
            <div style={styles.content}>
                <p style={styles.greeting}>Hello,</p>
                <p>You have received a new inquiry from the Blaupunkt website contact form. Here are the details:</p>

                <table style={styles.table}>
                    <tbody>
                        <tr>
                            <th style={styles.th}>Name</th>
                            <td style={styles.td}>{name}</td>
                        </tr>
                        <tr>
                            <th style={styles.th}>Email</th>
                            <td style={styles.td}>
                                <a href={`mailto:${email}`} style={styles.link}>{email}</a>
                            </td>
                        </tr>
                        <tr>
                            <th style={styles.th}>Phone</th>
                            <td style={styles.td}>{phone}</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <span style={styles.messageLabel}>Message:</span>
                    <div style={styles.messageContent}>
                        {message}
                    </div>
                </div>
            </div>
            <div style={styles.footer}>
                <p style={styles.footerText}>
                    This email was sent from the Blaupunkt EV website contact form.
                </p>
                <p style={styles.footerText}>
                    &copy; {new Date().getFullYear()} Blaupunkt. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default EnquireTemplate;
