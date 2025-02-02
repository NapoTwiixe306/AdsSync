"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Brain, TrendingUp, Bell, DollarSign } from "lucide-react"

export default function AIBoost() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Réallocation Intelligente du Budget
            </CardTitle>
            <CardDescription>Optimisez automatiquement la distribution de votre budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Activer</span>
              <Switch />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Agressivité de l'ajustement</label>
              <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Badge variant="secondary" className="mr-2">
              IA
            </Badge>
            <Badge variant="outline">Budget</Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Enchères Dynamiques
            </CardTitle>
            <CardDescription>Ajustez les enchères en fonction du CTR en temps réel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Activer</span>
              <Switch />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Sensibilité au CTR</label>
              <Slider defaultValue={[70]} max={100} step={1} className="mt-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Badge variant="secondary" className="mr-2">
              IA
            </Badge>
            <Badge variant="outline">Enchères</Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Alertes Prédictives
            </CardTitle>
            <CardDescription>Recevez des alertes basées sur l'analyse prédictive</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Activer</span>
              <Switch />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Fréquence des alertes</label>
              <select className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <option>Haute</option>
                <option>Moyenne</option>
                <option>Basse</option>
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Badge variant="secondary" className="mr-2">
              IA
            </Badge>
            <Badge variant="outline">Alertes</Badge>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Rapport d'Optimisation IA
          </CardTitle>
          <CardDescription>Aperçu des optimisations réalisées par l'IA au cours des 7 derniers jours</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Budget réalloué : +15% d'efficacité sur les campagnes principales</li>
            <li>Enchères ajustées : Amélioration moyenne du CTR de 8%</li>
            <li>3 alertes critiques détectées et résolues automatiquement</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button>Voir le rapport complet</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

