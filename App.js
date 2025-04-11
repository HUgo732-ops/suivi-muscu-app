import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function App() {
  const [weight, setWeight] = useState(76);
  const [calories, setCalories] = useState(3000);
  const [biceps, setBiceps] = useState(35);
  const [chest, setChest] = useState(100);
  const [waist, setWaist] = useState(78);

  const data = [
    { week: "S1", poids: 76, bras: 35 },
    { week: "S2", poids: 76.5, bras: 35.5 },
    { week: "S3", poids: 77, bras: 36 },
    { week: "S4", poids: 77.2, bras: 36.2 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Suivi Musculation & Nutrition</h1>
      <Tabs defaultValue="training">
        <TabsList className="mb-4">
          <TabsTrigger value="training">Entraînement</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="progress">Progression</TabsTrigger>
        </TabsList>

        <TabsContent value="training">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Programme Hebdo + Détail Séances</h2>
              <div>
                <h3 className="font-semibold">Lundi - Push (Pecs + Biceps)</h3>
                <ul className="list-disc ml-6">
                  <li>Développé couché haltères : 4x8-12</li>
                  <li>Développé incliné barre : 4x10-12</li>
                  <li>Écartés poulie haute : 3x12-15</li>
                  <li>Curl barre droite : 4x10-12</li>
                  <li>Curl incliné haltères : 3x12-15</li>
                  <li>Gainage : 3x1min</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Mardi - Pull (Dos + Triceps)</h3>
                <ul className="list-disc ml-6">
                  <li>Tractions pronation : 4x6-10</li>
                  <li>Rowing haltères unilatéral : 3x10-12</li>
                  <li>Tirage vertical poulie : 4x10-12</li>
                  <li>Barre au front : 3x10-12</li>
                  <li>Extension triceps corde : 3x12-15</li>
                  <li>Crunchs au sol : 3x20</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Mercredi - Legs</h3>
                <ul className="list-disc ml-6">
                  <li>Presse inclinée : 4x10-12</li>
                  <li>Squat guidé ou libre : 3x8-10</li>
                  <li>Leg curl allongé : 4x12-15</li>
                  <li>Fentes marchées : 3x12 / jambe</li>
                  <li>Mollets debout : 4x15-20</li>
                  <li>Gainage latéral : 3x45 sec / côté</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Jeudi - Push (Épaules + Biceps)</h3>
                <ul className="list-disc ml-6">
                  <li>Développé épaules haltères : 4x10-12</li>
                  <li>Élévations latérales : 4x15</li>
                  <li>Oiseau sur banc : 4x12-15</li>
                  <li>Curl marteau : 3x10-12</li>
                  <li>Curl concentration : 3x12-15</li>
                  <li>Crunchs poulie haute : 3x15-20</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Vendredi - Pull (Dos + Triceps)</h3>
                <ul className="list-disc ml-6">
                  <li>Rowing barre buste penché : 4x8-12</li>
                  <li>Tirage horizontal poulie : 4x10-12</li>
                  <li>Shrugs haltères : 4x12-15</li>
                  <li>Dips assistés : 3x12-15</li>
                  <li>Extension triceps corde : 3x12-15</li>
                  <li>Gainage dynamique : 3x30 sec</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                ⚠️ Tempo : 2-0-1 / Repos : 60-90 sec / Semaine 4 = deload (volume -30/40%)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Plan Nutrition 4 repas (env. 3000 kcal)</h2>
              <ul className="list-disc ml-6">
                <li><strong>Petit déj :</strong> Pain complet, banane, beurre de cacahuète, lait végétal</li>
                <li><strong>Déjeuner :</strong> Riz, steak 5%, fromage, fruit, huile d'olive</li>
                <li><strong>Collation :</strong> Pain de mie, poulet/jambon, oléagineux, compote</li>
                <li><strong>Dîner :</strong> Pâtes, dinde/poulet, fromage frais, fruit</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Sans flocons, œufs, poisson, légumes ni lait le soir
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Suivi de Progression</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Poids (kg)</Label>
                  <Input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Calories (kcal)</Label>
                  <Input type="number" value={calories} onChange={e => setCalories(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Tour de bras (cm)</Label>
                  <Input type="number" value={biceps} onChange={e => setBiceps(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Tour de poitrine (cm)</Label>
                  <Input type="number" value={chest} onChange={e => setChest(Number(e.target.value))} />
                </div>
                <div>
                  <Label>Tour de taille (cm)</Label>
                  <Input type="number" value={waist} onChange={e => setWaist(Number(e.target.value))} />
                </div>
              </div>
              <Button className="mt-4">Enregistrer</Button>
              <div className="mt-8">
                <h3 className="font-semibold mb-2">Progression (Poids & Bras)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="poids" stroke="#8884d8" name="Poids (kg)" />
                    <Line type="monotone" dataKey="bras" stroke="#82ca9d" name="Bras (cm)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}