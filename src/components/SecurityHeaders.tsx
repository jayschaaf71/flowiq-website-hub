import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Set Content Security Policy via meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://calendly.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://calendly.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://rnulxsjbzsvvatcbjmvr.supabase.co wss://rnulxsjbzsvvatcbjmvr.supabase.co",
      "frame-src 'self' https://calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');
    document.head.appendChild(cspMeta);

    // Set X-Content-Type-Options
    const contentTypeMeta = document.createElement('meta');
    contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
    contentTypeMeta.content = 'nosniff';
    document.head.appendChild(contentTypeMeta);

    // Set X-Frame-Options
    const frameOptionsMeta = document.createElement('meta');
    frameOptionsMeta.httpEquiv = 'X-Frame-Options';
    frameOptionsMeta.content = 'DENY';
    document.head.appendChild(frameOptionsMeta);

    // Set Referrer Policy
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Set Permissions Policy
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = [
      'camera=(),',
      'microphone=(),',
      'geolocation=(),',
      'interest-cohort=()'
    ].join(' ');
    document.head.appendChild(permissionsMeta);

    // Cleanup function
    return () => {
      document.head.removeChild(cspMeta);
      document.head.removeChild(contentTypeMeta);
      document.head.removeChild(frameOptionsMeta);
      document.head.removeChild(referrerMeta);
      document.head.removeChild(permissionsMeta);
    };
  }, []);

  return null;
};

export default SecurityHeaders;