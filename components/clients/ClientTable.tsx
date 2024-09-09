import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import { Client } from "@/types/clients";
import clients from "@/data/clients";
interface ClientTableProps {
  limit?: number;
  title?: string;
}

const ClientTable = ({ limit, title }: ClientTableProps) => {
  const sortedClients: Client[] = [...clients].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredClients = limit ? sortedClients.slice(0, limit) : sortedClients;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : "Clients"}
      </h3>
      <Table>
        <TableCaption>A list of recent clients</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell className="hidden md:table-cell">
                {client.IsActive}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {client.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${client.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientTable;
