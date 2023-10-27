CREATE TABLE `cliente` (
	`id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`nome` varchar(30) NOT NULL,
	`sobrenome` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `pedido` (
	`id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`data` DATE NOT NULL,
	`id_cliente` INT(11) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `item_do_pedido` (
	`id_pedido` INT(11) NOT NULL UNIQUE,
	`id_produto` INT(11) NOT NULL UNIQUE,
	`qtdade` INT(11) NOT NULL,
	PRIMARY KEY (`id_pedido`,`id_produto`)
);

CREATE TABLE `produto` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`descricao` varchar(45) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `pedido` ADD CONSTRAINT `pedido_fk0` FOREIGN KEY (`id_cliente`) REFERENCES `cliente`(`id`);

ALTER TABLE `item_do_pedido` ADD CONSTRAINT `item_do_pedido_fk0` FOREIGN KEY (`id_pedido`) REFERENCES `pedido`(`id`);

ALTER TABLE `item_do_pedido` ADD CONSTRAINT `item_do_pedido_fk1` FOREIGN KEY (`id_produto`) REFERENCES `produto`(`id`);





