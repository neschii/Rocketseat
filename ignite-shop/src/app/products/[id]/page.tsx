	"use client"
import { useParams } from 'next/navigation';

export default function Products() {
  const params = useParams();
  return <h1>esse daqui é {params.id}</h1>
}