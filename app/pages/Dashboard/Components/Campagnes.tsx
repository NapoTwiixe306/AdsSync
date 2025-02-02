"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, TrendingUp, Minus } from "lucide-react"

// Types pour nos données
type Performance = "Performante" | "À améliorer" | "Stable"
type Tendance = "up" | "down" | "stable"

interface Campagne {
  id: number
  nom: string
  budget: number
  performance: Performance
  tendance: Tendance
}

export default function GestionCampagnes() {
  // Données factices pour les campagnes
  const campagnesInitiales: Campagne[] = [
    { id: 1, nom: "Campagne A", budget: 5000, performance: "Performante", tendance: "up" },
    { id: 2, nom: "Campagne B", budget: 3000, performance: "À améliorer", tendance: "down" },
    { id: 3, nom: "Campagne C", budget: 2000, performance: "Stable", tendance: "stable" },
    { id: 4, nom: "Campagne D", budget: 4000, performance: "Performante", tendance: "up" },
    { id: 5, nom: "Campagne E", budget: 1500, performance: "À améliorer", tendance: "down" },
  ]

  const [campagnes, setCampagnes] = useState<Campagne[]>(campagnesInitiales)
  const [filtrePerformance, setFiltrePerformance] = useState<Performance | "Toutes">("Toutes")

  const filtrerCampagnes = () => {
    if (filtrePerformance === "Toutes") {
      return campagnes
    }
    return campagnes.filter((campagne) => campagne.performance === filtrePerformance)
  }

  const getBadgeColor = (performance: Performance) => {
    switch (performance) {
      case "Performante":
        return "bg-green-500"
      case "À améliorer":
        return "bg-red-500"
      case "Stable":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTendanceIcon = (tendance: Tendance) => {
    switch (tendance) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      case "stable":
        return <Minus className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Gestion des campagnes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <Input className="max-w-sm" placeholder="Rechercher une campagne..." />
          <Select onValueChange={(value) => setFiltrePerformance(value as Performance | "Toutes")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrer par performance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Toutes">Toutes</SelectItem>
              <SelectItem value="Performante">Performante</SelectItem>
              <SelectItem value="À améliorer">À améliorer</SelectItem>
              <SelectItem value="Stable">Stable</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Tendance</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtrerCampagnes().map((campagne) => (
              <TableRow key={campagne.id}>
                <TableCell>{campagne.nom}</TableCell>
                <TableCell>{campagne.budget.toLocaleString()}€</TableCell>
                <TableCell>
                  <Badge className={getBadgeColor(campagne.performance)}>
                    {campagne.performance === "Performante" && "🔥 "}
                    {campagne.performance === "À améliorer" && "🛑 "}
                    {campagne.performance}
                  </Badge>
                </TableCell>
                <TableCell>{getTendanceIcon(campagne.tendance)}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

