import pygame,random
pygame.init()

screen=pygame.display.set_mode((800,800))
pygame.display.set_caption("Enemy")

icon=pygame.image.load('ufo.png')
pygame.display.set_icon(icon)

play1=pygame.image.load('spaceship.png')
enemy1=pygame.image.load('enemy.png')
bullet1=pygame.image.load('bullet.png')
bullY=650
bull_vel=1
bull_state="ready"
x1=random.randint(0,800)
y1=random.randint(0,50)
x,y=350,650
vel,vel1=0,0.5
def player(x,y):
    screen.blit(play1,(x,y))
def enemyplayer(x1,y1):
    screen.blit(enemy1, (x1, y1))
def bullet_shot(x,y):
    global bull_state
    bull_state="fire"
    screen.blit(bullet1,(x+14,y+10))

run=True
while run:
    screen.fill((0,0,0))
    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            run=False
        if event.type==pygame.KEYDOWN:
            if event.key==pygame.K_RIGHT:
                vel+=0.5
            if event.key==pygame.K_LEFT:
                vel-=0.5
            if event.key==pygame.K_SPACE:
                bullet_shot(x,bullY)
        if event.type==pygame.KEYUP:
            if event.key == pygame.K_RIGHT or event.key==pygame.K_LEFT:
                vel=0
    x+=vel
    x1+=vel1
    if x<0:
        x=0
    if x>736:
        x=736
    if x1<0:
        x1=0
        vel1=0.8
        y1+=20
    if x1>736:
        x1=736
        vel1=-0.6
        y1+=20
    if bull_state == "fire":
        bullet_shot(x,bullY)
        bullY-=bull_vel
    player(x,y)
    enemyplayer(x1,y1)
    pygame.display.update()

pygame.quit()