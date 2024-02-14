# IMD P3 Projekt "Erkunden"

In diesem Projekt werden vier Prototypen der Fallbeispiele CineTrail, TrekGo, Cultuvate und KidQuest gezeigt.

## Menü

Um Fallbeispiele für P3 Team Erkundung zeigen zu können, hat sich das Team für ein Menü entschieden, das dazu dient, bequem zwischen den Fallbeispielen wechseln zu können.

## CineTrail - Daria Savchenko

CineTrail stellt zwei Marker auf der Karte von Großbritannien dar. Jeder Marker repräsentiert einen Drehort, den der Filmenthusiast besuchen kann.
Am Drehort können zwei Aktivitäten durchgeführt werden. Entweder man hört sich Musik an, die mit dem Drehort in Verbindung steht. Oder man kann einen genauen Sceneort in der Umgebung suchen.
Interaktive Tasten bei Cinetrail sind: die beiden Marker auf der Karte, die Navigationstasten (Zurück, Bild-/Musikmodus-Taste, Karte), im Bildmodus kann man durch die Bilder blättern, indem man auf Weiter- und Zurück-Pfeil klickt.

Da die Aktivitäten an jedem Standort gleich sind und sich nur die Inhalte unterscheiden, wurden data.js Dateien für Bilder, Standorte und Songs erstellt.

## TrekGo - Theresa Hußke

Unter dem Menü-Punkt TrekGo ist ein Teil des Konzeptes TrekGo als prototyp erstellt worden, der von Theresa Hußke im Studiengang "Interactive Media Design" 2024 im WS24_24 erarbeitet wurde. Dieser Prototyp zeigt, wie in einer Gruppe geschossene Fotos auf einer Karte angezeigt werden.

Walkthrough:
Die Karte bei TrekGo zeigt Marker in Österreich. Jeder der Marker repräsentiert einen Ort, an dem während einer Gruppenwanderung ein Foto von unterschiedlichen Personen aufgenommen wurde.
Wenn auf einen der Marker geklickt wird, erhält man weitere Informationen über das Foto. Zum einen wird angegeben, von wem es wann geschossen wurde und zum anderen, ob es von anderen Personen aus der Gruppe geliked beziehungsweise kommentiert wurde. Die Informationen werden aus der geoJSON.json gelesen und verarbeitet, sodass sich die Informationen dynamisch verändern können, wenn ein anderer Marker angeklickt wird.
Es kann auf das Herz gelickt werden, das wiederrum signalisiert, dass dir das Foto gefällt.

Interaktion:
Die Marker können angeklickt werden.
Der Zurück-Button des PopUps schließt das PopUp wieder.
Im PopUp kann das Herz angeklickt werden, sodass ein "like" hinzugefügt wird.

Nicht umgesetzt:
Ursprünglich sollte noch das Kommentieren der Fotos eingebaut werden. Das hat sich jedoch auf Grund der knappen Zeit nicht umsetzen lassen, da zuvor zu viel Zeit damit verbracht wurde, die Marker generell separat abzurufen zu können.
Außerdem wurde nicht umgesetzt, dass das "liken" des Herzes beispielsweise mit localStorage gespeichert wird. Somit ist jedes mal, wenn das PopUp geschlossen wird, das "gelikte" wieder zurückgesetzt.
