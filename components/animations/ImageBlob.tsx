import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageBlobProps {
  // Differences between String and string
  quoteReceived: String | null;
  blobUrl: string | null;
}

const ImageBlob = ({ 
  quoteReceived, 
  // blobUrl 
}: ImageBlobProps) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    // Add response object & define the type of response we want to expect
    const response = {
      "statusCode": 200,
      "headers": {
        "Content-Type": "image/png",
        "Access-Control-Allow-Origin": "*"
      },
      "body": blob,
      // Base 64 Encoded string that compiles into an image to be set and provided to users in this application
      "isBase64Encoded": true
    }

    const binaryData = Buffer.from(response.body, 'base64');
    const blob = new Blob([binaryData], { type: 'response.headers["Content-Type"]' });
    const newBlobUrl = URL.createObjectURL(blob);

    setBlobUrl(newBlobUrl);
    return () => {
      URL.revokeObjectURL(newBlobUrl);
    }
  }, []);

  if (!blobUrl) {
    return null;
  }

  return (
    <Image 
      src={blobUrl} 
      alt="Generated quote card image"
      width={150}
      height={100} 
    />
  )
}

export default ImageBlob
