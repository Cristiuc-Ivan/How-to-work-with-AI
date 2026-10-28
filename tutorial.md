##) Ключевые слова, которые лучше применять для большей эффективности
	- explore

## Как думают ИИ

ИИ мыслят горизонтальными слоями (отдельно реализовать backend, отдельно frontend, отдельно bd), но это не очень эффективно, так как правки могут быть массивными и это сложней тестировать.

Поэтому лучше покрывать все вертикальными фазами, которые будут затрагивать все касающиеся того или иного аспекта моменты за одну фазу.


Найти про поинтеры файлов, чтобы не забивать контекст

## Если использовать для implement более слабую модель, а на review более сильную, то можно получить более качественный результат на выходе.


## Как начать проект с нуля:
1) описать идею ИИ, дать все возможные вводные  данные и пообщатся с ним на эту тему. Дать позадавать ему вопросы и предложить решения / улучшения (можно через grill). Можно сохранить все рассуждения и идеи в документы по типу researh.md.
2) prototyping, чтобы была еще более ясная картина того, что я хочу получить.
3) Описать User Experience и Agent Experience (feedback loops, technology choice, module shape, testing strategies). 

## Перед началом проекта описать ИИ:
1) код должен быть простым и понятным, без излишних усложнений, где это не требуется.
2) при написании кода опирайся на SOLID design principles:
	- S stands for Single Responsibility Principle (a class should have one primary responsibility).
	- O stands for Open/Closed Principle (the code should be open to expansion but closed to modification).
	- L stands for Liskov Substitution Principle (a child class should be substitutable for a parent class without breaking the logic).
	- I stands for Interface Segregation Principle (it's better to have several small interfaces than one large one).
	- D stands for Dependency Inversion Principle (the high-level module must not depend on the low-level module, but they should depend on abstractions).
3) также не забывай про Encapsulation  (is a principle where an object's internal state is hidden from external code).
4) если требуется принять какое-то решение, то выбирай самое простое и эффективное из существующих. В будущем всегда можно усложнить какую-то функцию, а вот упростить тяжелей. Это же касается и предлагаемых вариантов - самое простое и эффективное из существующих.

