import React from 'react';
import { AlertCircle, BarChart3, DollarSign, Percent, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const kpis = {
    depenses: 15000,
    roi: 2.5,
    ctr: 3.2,
    campagnesActives: 7,
};
const alertes = ["Budget dépassé pour la campagne A", "Faible performance de la campagne B"];
const campagnesCritiques = [
    { id: 1, nom: "Campagne A" },
    { id: 2, nom: "Campagne B" },
    { id: 3, nom: "Campagne C" },
];

export default function Overview() {
    return (
        <div className="w-full  px-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Dépenses</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{kpis.depenses.toLocaleString()}€</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">ROI</CardTitle>
                        <Percent className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{kpis.roi}x</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">CTR</CardTitle>
                        <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{kpis.ctr}%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Campagnes Actives</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{kpis.campagnesActives}</div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Alertes Importantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {alertes.map((alerte, index) => (
                                <li key={index} className="flex items-center text-red-600">
                                    <AlertCircle className="h-4 w-4 mr-2" />
                                    {alerte}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Raccourcis Campagnes Critiques</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            {campagnesCritiques.map((campagne) => (
                                <Button key={campagne.id} variant="outline">
                                    Modifier {campagne.nom}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
